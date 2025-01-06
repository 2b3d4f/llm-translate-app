import { useState } from 'react'

import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@renderer/lib/utils'
import { Label } from '@renderer/components/ui/label'
import { Textarea } from '@renderer/components/ui/textarea'
import { Button } from '@renderer/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@renderer/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@renderer/components/ui/popover'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from '@renderer/components/ui/select'

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
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

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
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full sm:max-w-96 flex justify-between"
                >
                  {value
                    ? languages.find((language) => language.code === value)?.name
                    : 'Select language...'}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandList>
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          key={language.name}
                          value={language.name}
                          onSelect={() => {
                            setValue(value === language.code ? '' : language.code)
                            setOpen(false)
                          }}
                        >
                          {language.name}
                          <Check
                            className={cn(
                              'ml-auto',
                              value === language.code ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            {/* <Select>
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
            </Select> */}
            <Button className="sm:max-w-32 w-3/12 min-w-24">Translate</Button>
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
