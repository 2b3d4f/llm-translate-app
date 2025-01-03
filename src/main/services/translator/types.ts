import { ChatCompletionCreateParams } from 'openai/resources'
import { LanguageCode } from './languages'

export interface LanguageInfo {
  language: LanguageCode
  name: string
}

export interface TranslationResponse {
  translatedText: string
  targetLang?: LanguageCode
  detectedLang?: string
}

export interface TranslationService {
  translate(
    input: string,
    targetLang: LanguageCode,
    model: ChatCompletionCreateParams['model']
  ): Promise<TranslationResponse>
  getSupportedLanguages(): LanguageInfo[]
}
