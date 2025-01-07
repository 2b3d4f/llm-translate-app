import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog'
import { Suspense } from 'react'
import { Button } from './ui/button'

import { ModeToggle } from './mode-toggle'
import { SunMoon, Terminal } from 'lucide-react'

import { trpcReact } from '../trpc'

interface AboutDialogProps {
  children: React.ReactNode
}

function AboutDialog({ children }: AboutDialogProps): JSX.Element {
  const { mutate: ping } = trpcReact.ping.useMutation({
    onSuccess: (data) => {
      console.log(data)
    }
  })

  const handlePing = (): void => {
    ping()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <Suspense>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>LLM Translate</DialogTitle>
            <DialogDescription>v1.0.0</DialogDescription>
          </DialogHeader>
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <SunMoon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Theme</p>
              <p className="text-sm text-muted-foreground">
                Toggle light/dark theme for the application.
              </p>
            </div>
            <ModeToggle />
          </div>
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <Terminal />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Ping</p>
              <p className="text-sm text-muted-foreground">Send ping to the main process.</p>
            </div>
            <Button onClick={handlePing} variant={'outline'}>
              Ping
            </Button>
          </div>
        </DialogContent>
      </Suspense>
    </Dialog>
  )
}

export { AboutDialog }
