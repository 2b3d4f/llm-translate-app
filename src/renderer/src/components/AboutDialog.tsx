import { trpcReact } from '@renderer/trpc'
import { Separator } from '@renderer/components/ui/separator'
import { Button } from '@renderer/components/ui/button'
import { HelpCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@renderer/components/ui/dialog'

function AboutDialog(): JSX.Element {
  const versionsQuery = trpcReact.versions.useQuery()

  const versions = versionsQuery.data ?? {
    electron: '0.0.0',
    chrome: '0.0.0',
    node: '0.0.0'
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-none w-[44px]">
          <HelpCircle absoluteStrokeWidth strokeWidth={1.5} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About this app</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-base">
                  LLM Translate <code>v1.0.0</code>
                </p>
                <p>&copy; 2025 Tomonobu Terakubo</p>
              </div>
              <Separator />
              <ul className="">
                <li>
                  Electron <code>v{versions.electron}</code>
                </li>
                <li>
                  Chromium <code>v{versions.chrome}</code>
                </li>
                <li>
                  Node <code>v{versions.node}</code>
                </li>
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AboutDialog
