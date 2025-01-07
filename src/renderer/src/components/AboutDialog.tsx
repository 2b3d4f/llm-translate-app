import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog'

interface AboutDialogProps {
  children: React.ReactNode
}

function AboutDialog({ children }: AboutDialogProps): JSX.Element {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>LLM Translate</DialogTitle>
          <DialogDescription>Nothing here yet... For now.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export { AboutDialog }
