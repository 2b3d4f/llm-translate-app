import { useState } from 'react'
import { trpcReact } from '@renderer/trpc'
import Header from '@renderer/components/Header'

import { Button } from '@renderer/components/ui/button'
import { Textarea } from '@renderer/components/ui/textarea'
import { Label } from '@renderer/components/ui/label'

function App(): JSX.Element {
  const [text, setText] = useState('')
  const echo = trpcReact.echo.useMutation()
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const ipcHandle = async (): Promise<void> => {
    const result = echo.mutate({ text: text })
    console.log(result)
  }

  return (
    <>
      <Header />
      <div>
        <Label>
          Input
          <Textarea
            className="resize-none grow"
            onChange={(e) => setText(e.target.value)}
          ></Textarea>
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
