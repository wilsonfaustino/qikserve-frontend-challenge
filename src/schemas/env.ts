import { z } from 'zod'

export const envSchema = z.object({
  SETTINGS_URL: z.string().default(''),
})
