import z from 'zod'
import { initTRPC } from '@trpc/server'

const t = initTRPC.create({ isServer: true })
const procedure = t.procedure

export const router = t.router({
  ping: procedure.query(() => {
    console.log('pong')
    return 'pong'
  }),
  echo: procedure.input(z.object({ text: z.string() })).mutation((request) => {
    const { text } = request.input
    console.log(`API Says: ${text}`)
    return { text: `API Says: ${text}` }
  })
})

export type AppRouter = typeof router
