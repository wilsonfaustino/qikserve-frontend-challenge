import { envSchema } from '~/schemas/env'

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('⚠️ Invalid environment variables.', parsedEnv.error.format())
  throw new Error(`Invalid environment variables.`)
}

export const env = parsedEnv.data
