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
  }),
  versions: procedure.query(() => {
    const { electron, chrome, node } = process.versions
    console.log({ electron, chrome, node })

    return { electron, chrome, node }
  })
})

export type AppRouter = typeof router
