import { TitlebarBase } from './TitlebarBase'
import { TitlebarButton } from './ui/TitlebarButton'
import { HelpCircle } from 'lucide-react'

function Titlebar(): JSX.Element {
  return (
    <TitlebarBase>
      <div className="h-full *:max-h-full flex items-center justify-between bg-opacity-0 hover:bg-opacity-50 px-4">
        <div className="text-[12px]">Electron</div>
        <TitlebarButton tooltip="About">
          <HelpCircle absoluteStrokeWidth strokeWidth={1.5} />
        </TitlebarButton>
      </div>
    </TitlebarBase>
  )
}

export { Titlebar }
