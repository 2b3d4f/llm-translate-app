import { createContext, useContext, useEffect, useState } from 'react'
import { trpcReact } from '@renderer/trpc'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  const setNativeThemeDark = trpcReact.setNativeThemeDark.useMutation()
  const setNativeThemeLight = trpcReact.setNativeThemeLight.useMutation()
  const setNativeThemeSystem = trpcReact.setNativeThemeSystem.useMutation()

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const updateNativeTheme = async (): Promise<void> => {
      try {
        switch (theme) {
          case 'light':
            await setNativeThemeLight.mutateAsync()
            break
          case 'dark':
            await setNativeThemeDark.mutateAsync()
            break
          case 'system':
            await setNativeThemeSystem.mutateAsync()
            break
        }
      } catch (error) {
        console.error('Failed to update native theme:', error)
      }
    }
    void updateNativeTheme()
  }, [theme, setNativeThemeDark, setNativeThemeLight, setNativeThemeSystem])

  const value = {
    theme,
    setTheme: (theme: Theme): void => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    }
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
