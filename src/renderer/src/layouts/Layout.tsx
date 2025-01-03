import { Outlet } from 'react-router'
import { createContext, useState } from 'react'
import TitleBar from '@renderer/components/TitleBar'

export interface TranslationState {
  text: string
  translatedText: string
  targetLang?: string
  setText: (text: string) => void
  setTranslatedText: (text: string) => void
  setTargetLang: (lang?: string) => void
}

export const TranslationContext = createContext<TranslationState | null>(null)

export default function Layout(): JSX.Element {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [targetLang, setTargetLang] = useState<string | undefined>(undefined)

  return (
    <TranslationContext.Provider
      value={{
        text,
        translatedText,
        targetLang,
        setText,
        setTranslatedText,
        setTargetLang
      }}
    >
      <TitleBar />
      <main className="flex flex-col grow">
        <Outlet />
      </main>
    </TranslationContext.Provider>
  )
}
