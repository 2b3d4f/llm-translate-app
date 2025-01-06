import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { Button } from './button'
import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface TitlebarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  tooltip: string
  width?: string
  onClick?: () => void
}

function TitlebarButton({
  children,
  tooltip,
  width = '44px',
  onClick,
  ...props
}: TitlebarButtonProps): JSX.Element {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={'ghost'}
            size={'icon'}
            className={cn('rounded-none', `w-[${width}]`)}
            onClick={onClick}
            {...props}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-background text-foreground border border-input shadow-sm">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export { TitlebarButton }
