import { Link } from 'react-router'
import { Button } from '@renderer/components/ui/button'
import { Home, Settings } from 'lucide-react'
import { ModeToggle } from '@renderer/components/mode-toggle'
import AboutDialog from '@renderer/components/AboutDialog'

function TitleBar(): JSX.Element {
  return (
    <>
      <header className="flex justify-between *:items-center titlebar px-4 ">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="rounded-none w-[44px]" asChild>
            <Link to="/">
              <Home absoluteStrokeWidth strokeWidth={1.5} />
            </Link>
          </Button>
          <h1 className="text-[12px]">Translator app</h1>
        </div>
        <div>
          <ModeToggle />
          <Button variant="ghost" size="sm" className="rounded-none w-[44px]" asChild>
            <Link to="/settings">
              <Settings absoluteStrokeWidth strokeWidth={1.5} />
            </Link>
          </Button>
          <AboutDialog />
        </div>
      </header>
    </>
  )
}

export default TitleBar
