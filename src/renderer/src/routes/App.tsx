import { useState } from 'react'
import { trpcReact } from '@renderer/trpc'
import Header from '@renderer/components/Header'

import { Button } from '@renderer/components/ui/button'
import { Textarea } from '@renderer/components/ui/textarea'
import { Label } from '@renderer/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@renderer/components/ui/select'

const excludedLanguages = ['ZH', 'EN', 'PT']

function App(): JSX.Element {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [isTranslating, setIsTranslating] = useState(false)
  const [targetLang, setTargetLang] = useState<string | undefined>(undefined)
  const translate = trpcReact.translate.useMutation()
  const languagesQuery = trpcReact.getSupportedLanguages.useQuery()
  const languages = {
    data: (languagesQuery.data ?? []).filter((lang) => !excludedLanguages.includes(lang.language))
  }

  const handleTranslate = async (): Promise<void> => {
    setIsTranslating(true)
    try {
      const result = await translate.mutateAsync({
        text: text,
        targetLang: targetLang as string,
        model: 'gpt-4o-mini'
      })
      setTranslatedText(result.translatedText)
    } catch (error) {
      console.error('Translation failed:', error)
      setTranslatedText(`Translation failed`)
    } finally {
      setIsTranslating(false)
    }
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
            placeholder="Enter text to translate"
          ></Textarea>
        </Label>
        <Label>
          Output
          <Textarea
            className="resize-none"
            readOnly
            value={translatedText}
            placeholder={isTranslating ? 'Translating...' : 'Translation will appear here'}
          ></Textarea>
        </Label>
      </div>
      <div>
        <Select onValueChange={setTargetLang}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.data?.map(({ language, name }) => (
              <SelectItem key={language} value={language}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={handleTranslate}
          disabled={text.trim() === '' || isTranslating || !targetLang}
        >
          Translate
        </Button>
      </div>
    </>
  )
}

export default App
