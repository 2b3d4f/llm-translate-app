import { useContext, useState } from 'react'
import { trpcReact } from '@renderer/trpc'
import { cn } from '@renderer/lib/utils'
import { TranslationContext } from '@renderer/layouts/Layout'
import { Check, ChevronsUpDown } from 'lucide-react'

import { Button } from '@renderer/components/ui/button'
import { Textarea } from '@renderer/components/ui/textarea'
import { Label } from '@renderer/components/ui/label'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@renderer/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@renderer/components/ui/popover'

const excludedLanguages = ['ZH', 'EN', 'PT']

function App(): JSX.Element {
  const translationState = useContext(TranslationContext)
  const [isTranslating, setIsTranslating] = useState(false)
  const [open, setOpen] = useState(false)
  const translate = trpcReact.translate.useMutation()
  const languagesQuery = trpcReact.getSupportedLanguages.useQuery()
  const languages = {
    data: (languagesQuery.data ?? []).filter((lang) => !excludedLanguages.includes(lang.language))
  }

  const handleTranslate = async (): Promise<void> => {
    setIsTranslating(true)
    try {
      const result = await translate.mutateAsync({
        text: translationState?.text ?? '',
        targetLang: translationState?.targetLang as string,
        model: 'gpt-4o-mini'
      })
      translationState?.setTranslatedText(result.translatedText)
    } catch (error) {
      console.error('Translation failed:', error)
      translationState?.setTranslatedText('Translation failed')
    } finally {
      setIsTranslating(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      if (translationState?.text.trim() !== '' && !isTranslating && translationState?.targetLang) {
        handleTranslate()
      }
    }
  }

  return (
    <>
      <div className="grow grid grid-cols-2 m-4 mt-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="input">Input</Label>
          <Textarea
            className="resize-none grow"
            value={translationState?.text}
            onChange={(e) => translationState?.setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter text to translate"
            id="input"
          ></Textarea>
          <p className="text-sm text-muted-foreground">
            Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to translate
          </p>
          <div className="flex gap-2">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {translationState?.targetLang
                    ? languages.data?.find((lang) => lang.language === translationState.targetLang)
                        ?.name
                    : 'Select language...'}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search language..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {languages.data?.map((lang) => (
                        <CommandItem
                          key={lang.language}
                          value={lang.name}
                          onSelect={(currentValue) => {
                            const selectedLang = languages.data.find(
                              (l) => l.name === currentValue
                            )?.language
                            translationState?.setTargetLang(
                              selectedLang === translationState.targetLang
                                ? undefined
                                : selectedLang
                            )
                            setOpen(false)
                          }}
                        >
                          {lang.name}
                          <Check
                            className={cn(
                              'ml-auto',
                              translationState?.targetLang === lang.language
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Button
              onClick={handleTranslate}
              disabled={
                !translationState?.text.trim() || isTranslating || !translationState?.targetLang
              }
              className="shrink-0"
            >
              Translate
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="output">Output</Label>
          <Textarea
            className="resize-none grow"
            readOnly
            value={translationState?.translatedText}
            placeholder={isTranslating ? 'Translating...' : 'Translation will appear here'}
            id="output"
          ></Textarea>
        </div>
      </div>
    </>
  )
}

export default App
