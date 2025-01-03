import { trpcReact } from '@renderer/trpc'

import { Alert, AlertDescription, AlertTitle } from '@renderer/components/ui/alert'
import { Button } from '@renderer/components/ui/button'
import { Sun, Moon, Laptop, Terminal } from 'lucide-react'

function Setting(): JSX.Element {
  const setNativeThemeDark = trpcReact.setNativeThemeDark.useMutation()
  const setNativeThemeLight = trpcReact.setNativeThemeLight.useMutation()
  const setNativeThemeSystem = trpcReact.setNativeThemeSystem.useMutation()

  return (
    <>
      <div>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Debug Zone</AlertTitle>
          <AlertDescription>
            The following options are for debugging purposes only. Use at your own discretion.
          </AlertDescription>
        </Alert>
        <Button variant={'ghost'} size={'sm'} onClick={() => setNativeThemeLight.mutate()}>
          <Sun /> Set native theme to Light
        </Button>
        <Button variant={'ghost'} size={'sm'} onClick={() => setNativeThemeDark.mutate()}>
          <Moon /> Set native theme to Dark
        </Button>
        <Button variant={'ghost'} size={'sm'} onClick={() => setNativeThemeSystem.mutate()}>
          <Laptop /> Set native theme to System
        </Button>
        <Button
          variant={'ghost'}
          size={'sm'}
          onClick={() => localStorage.removeItem('vite-ui-theme')}
        >
          Remove <code>vite-ui-theme</code> from Local Storage
        </Button>
      </div>
    </>
  )
}

export default Setting
