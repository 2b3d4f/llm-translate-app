import z from 'zod'
import { initTRPC } from '@trpc/server'
import { OpenAITranslator } from './services/translator/openai-translator'
import { LanguageCode } from './services/translator/languages'

const t = initTRPC.create({ isServer: true })
const procedure = t.procedure

const translator = new OpenAITranslator(process.env.OPENAI_API_KEY)

const translateInput = z.object({
  text: z.string().min(1, { message: 'Please enter text' }).trim().describe('Text to translate'),
  targetLang: z.string().describe('Target language to translate to'),
  model: z.string().describe('Model to use for translation')
})

export const router = t.router({
  ping: procedure.query(() => {
    console.log('pong')
    return 'pong'
  }),
  echo: procedure.input(z.object({ text: z.string() })).mutation((request) => {
    const { text } = request.input
    console.log(`API Says: ${text}`)
    return { text: `API Says: ${text}` }
  }),
  versions: procedure.query(() => {
    const { electron, chrome, node } = process.versions
    console.log({ electron, chrome, node })

    return { electron, chrome, node }
  }),
  translate: procedure.input(translateInput).mutation(async (request) => {
    const { text, targetLang, model } = request.input
    console.log(`Translating to ${targetLang}: ${text}`)

    try {
      const result = await translator.translate(text, targetLang as LanguageCode, model)
      return result
    } catch (error) {
      console.error('Translation error:', error)
      throw new Error('Translation failed')
    }
  }),
  getSupportedLanguages: procedure.query(() => {
    return translator.getSupportedLanguages()
  })
})

export type AppRouter = typeof router
