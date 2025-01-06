import TitleBarBase from './TitleBarBase'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { HelpCircle } from 'lucide-react'

function TitleBar(): JSX.Element {
  return (
    <TitleBarBase>
      <div className="h-full *:max-h-full flex items-center justify-between bg-opacity-0 hover:bg-opacity-50 bg-white px-4">
        <div className="text-[12px] text-black">Electron</div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={'ghost'} size={'icon'} className="rounded-none w-[44px]">
                <span className="sr-only">About</span>
                <HelpCircle absoluteStrokeWidth strokeWidth={1.5} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>About</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </TitleBarBase>
  )
}

export default TitleBar
