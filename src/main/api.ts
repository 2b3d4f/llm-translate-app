import z from 'zod'
import { initTRPC } from '@trpc/server'
import { is } from '@electron-toolkit/utils'

const t = initTRPC.create({ isServer: true, isDev: is.dev })
const procedure = t.procedure

export const router = t.router({
  ping: procedure.input(z.void()).mutation(async () => 'pong')
})

export type AppRouter = typeof router
