import z from 'zod'
import { initTRPC } from '@trpc/server'
import { is } from '@electron-toolkit/utils'
import { Translator } from './service/translator'

const t = initTRPC.create({ isServer: true, isDev: is.dev })
const procedure = t.procedure

const translator = new Translator(process.env.OPENAI_API_KEY)

export const router = t.router({
  ping: procedure.input(z.void()).mutation(() => 'pong'),
  mockTranslate: procedure
    .input(z.object({ text: z.string(), language: z.string() }))
    .mutation(async (request) => {
      const { input } = request
      const result = await new Promise<{ text: string; language: string }>((resolve) => {
        setTimeout(() => {
          resolve({
            text: input.text.split('').reverse().join(''),
            language: input.language.split('').reverse().join('')
          })
        }, 1000)
      })
      return result
    }),
  translate: procedure
    .input(z.object({ text: z.string(), language: z.string(), model: z.string() }))
    .mutation(async (request) => {
      const { text, language, model } = request.input
      try {
        const result = await translator.translate(text, language, model)
        console.log(result)
        return result
      } catch (error) {
        console.error(error)
        return {
          text: 'Sorry, an error occurred while translating the text.',
          detectedLang: 'unknown'
        }
      }
    })
})

export type AppRouter = typeof router
