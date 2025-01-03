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
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  const setNativeThemeDark = trpcReact.setNativeThemeDark.useMutation()
  const setNativeThemeLight = trpcReact.setNativeThemeLight.useMutation()
  const setNativeThemeSystem = trpcReact.setNativeThemeSystem.useMutation()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent): void => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return (): void => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    const effectiveTheme = theme === 'system' ? systemTheme : theme
    root.classList.add(effectiveTheme)
  }, [theme, systemTheme])

  useEffect(() => {
    const updateNativeTheme = async (): Promise<void> => {
      if (
        !setNativeThemeDark.isLoading &&
        !setNativeThemeLight.isLoading &&
        !setNativeThemeSystem.isLoading
      ) {
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
    }
    void updateNativeTheme()
  }, [theme])

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
