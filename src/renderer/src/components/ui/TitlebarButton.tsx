import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { Button } from './button'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

interface TitlebarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  tooltip: string
  width?: string
  onClick?: () => void
}

const TitlebarButton = forwardRef<HTMLButtonElement, TitlebarButtonProps>(
  ({ children, tooltip, width = '44px', onClick, ...props }, ref) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              ref={ref}
              variant={'ghost'}
              className={twMerge(clsx(`w-[${width}]`, 'h-full', 'rounded-none'))}
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
)

TitlebarButton.displayName = 'TitlebarButton'

export { TitlebarButton }
