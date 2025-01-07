import z from 'zod'
import { initTRPC } from '@trpc/server'
import { is } from '@electron-toolkit/utils'

const t = initTRPC.create({ isServer: true, isDev: is.dev })
const procedure = t.procedure

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
    })
})

export type AppRouter = typeof router
