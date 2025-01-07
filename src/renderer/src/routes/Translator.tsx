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
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh', name: 'Chinese' }
]

export default function Translator(): JSX.Element {
  const { mutateAsync: mockTranslate } = trpcReact.mockTranslate.useMutation()

  const handleTranslate = async () => {
    const result = await mockTranslate({ text: 'Hello', language: 'en' })
    console.log(result)
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
          ></Textarea>
          <div className="flex gap-2 justify-center">
            <Select>
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
            <Button className="sm:max-w-32 w-3/12 min-w-24" onClick={handleTranslate}>
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
            readOnly
          ></Textarea>
        </div>
      </div>
    </div>
  )
}
