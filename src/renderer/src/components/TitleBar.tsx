import TitleBarBase from './TitleBarBase'
import { Button } from './ui/button'
import { HelpCircle } from 'lucide-react'

function TitleBar(): JSX.Element {
  return (
    <TitleBarBase>
      <div className="h-full *:max-h-full flex items-center justify-between bg-opacity-0 hover:bg-opacity-50 bg-white px-4">
        <div className="text-[12px] text-black">Electron</div>
        <Button variant={'ghost'} size={'icon'} className="rounded-none">
          <span className="sr-only">About</span>
          <HelpCircle absoluteStrokeWidth strokeWidth={1.5} />
        </Button>
      </div>
    </TitleBarBase>
  )
}

export default TitleBar
