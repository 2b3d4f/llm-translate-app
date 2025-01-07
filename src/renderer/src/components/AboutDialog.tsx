import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog'
import { Suspense } from 'react'

import { ModeToggle } from './mode-toggle'
import { SunMoon } from 'lucide-react'

interface AboutDialogProps {
  children: React.ReactNode
}

function AboutDialog({ children }: AboutDialogProps): JSX.Element {
  return (
    <Suspense>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
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
        </DialogContent>
      </Dialog>
    </Suspense>
  )
}

export { AboutDialog }
