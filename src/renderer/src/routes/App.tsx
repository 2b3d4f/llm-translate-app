import { useState } from 'react'

import { Button } from '@renderer/components/ui/button'
import { ModeToggle } from '@renderer/components/mode-toggle'
import { Textarea } from '@renderer/components/ui/textarea'
import { Label } from '@renderer/components/ui/label'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Translator app</h1>
        <div>
          <ModeToggle />
        </div>
      </div>
      <div>
        <Label>
          Input
          <Textarea className="resize-none grow"></Textarea>
        </Label>
        <Label>
          Output
          <Textarea className="resize-none" readOnly></Textarea>
        </Label>
      </div>
      <div>
        <Button onClick={ipcHandle}>Translate</Button>
      </div>
    </>
  )
}

export default App
