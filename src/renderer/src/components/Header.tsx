import { Button } from '@renderer/components/ui/button'
import { Link } from 'react-router'
import { HelpCircle } from 'lucide-react'
import { ModeToggle } from '@renderer/components/mode-toggle'

function Header(): JSX.Element {
  return (
    <header className='flex justify-between'>
      <Button variant="link" asChild>
        <Link to="/">
          <h1 className="text-2xl font-bold">Translator app</h1>
        </Link>
      </Button>
      <h1 className="text-2xl font-bold"></h1>
      <div>
        <Button variant="outline" size="icon" asChild>
          <Link to="/about">
            <HelpCircle />
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
