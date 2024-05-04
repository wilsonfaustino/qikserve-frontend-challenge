import { z } from 'zod'

export const settingsSchema = z.object({
  name: z.string().default(''),
  description: z.string().default('').nullable(),
  address1: z.string().default('').nullable(),
  address2: z.string().default('').nullable(),
  address3: z.string().default('').nullable(),
  city: z.string().default(''),
  postcode: z.string().default(''),
  country: z.string().default(''),
  locale: z.string().default('pt-BR'),
  timezoneOffset: z.string().default(''),
  timezone: z.string().default(''),
  ccy: z.string().default(''),
  ccySymbol: z.string().default(''),
  currency: z.string().default(''),
  webSettings: z.object({
    bannerImage: z.string().default(''),
    backgroundColour: z.string().default('#ffffff'),
    primaryColour: z.string().default('#ff0000'),
    primaryColourHover: z.string().default('#ff0000'),
    navBackgroundColour: z.string().default('#ff0000'),
  }),
})
