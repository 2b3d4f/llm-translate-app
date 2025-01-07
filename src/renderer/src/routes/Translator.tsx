import { useState } from 'react'

import { Label } from '@renderer/components/ui/label'
import { Textarea } from '@renderer/components/ui/textarea'
import { Button } from '@renderer/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@renderer/components/ui/select'
import { trpcReact } from '@renderer/trpc'

const languages = [
  { code: 'english', name: 'English' },
  { code: 'spanish', name: 'Spanish' },
  { code: 'french', name: 'French' },
  { code: 'german', name: 'German' },
  { code: 'italian', name: 'Italian' },
  { code: 'japanese', name: 'Japanese' },
  { code: 'korean', name: 'Korean' },
  { code: 'chinese', name: 'Chinese' }
]

export default function Translator(): JSX.Element {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [language, setLanguage] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  // const { mutateAsync: mockTranslate } = trpcReact.mockTranslate.useMutation()
  const { mutateAsync: translate } = trpcReact.translate.useMutation()

  const handleTranslate = async (): Promise<void> => {
    setLoading(true)
    try {
      const { text } = await translate({
        text: input,
        language: language || '',
        model: 'gpt-4o-mini'
      })
      setOutput(text)
    } catch (error) {
      console.error(error)
      setOutput('Sorry, an error occurred while translating the text.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grow flex flex-col">
      {/* <h1>Translator</h1> */}
      <div className="grow grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-2 sm:gap-4 transition-[padding] p-2 sm:p-4 sm:pt-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="input" className="sr-only sm:not-sr-only">
            Input
          </Label>
          <Textarea
            id="input"
            placeholder="Enter text to translate"
            className="grow resize-none"
            onChange={(e) => setInput(e.target.value)}
          ></Textarea>
          <div className="flex gap-2 justify-center">
            <Select value={language} onValueChange={(value) => setLanguage(value)}>
              <SelectTrigger className="sm:max-w-96">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="max-h-[45vh] sm:max-h-none">
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              className="sm:max-w-32 w-3/12 min-w-24"
              onClick={handleTranslate}
              disabled={!input.trim() || !language || loading}
            >
              Translate
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="output" className="sr-only sm:not-sr-only">
            Output
          </Label>
          <Textarea
            id="output"
            placeholder="Translation will appear here"
            className="grow resize-none"
            value={loading ? 'Translating...' : output}
            readOnly
          ></Textarea>
        </div>
      </div>
    </div>
  )
}
