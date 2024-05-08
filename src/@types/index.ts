import { type z } from 'zod'

import type {
  cartProductModifierSchema,
  cartProductSchema,
  contentSchema,
  itemSchema,
  modifierSchema,
  sectionSchema,
} from '~/schemas/content'
import type { settingsSchema } from '~/schemas/settings'

export type Settings = z.infer<typeof settingsSchema>['webSettings']
export type Locale = Pick<z.infer<typeof settingsSchema>, 'locale' | 'ccy' | 'timezone' | 'timezoneOffset'>

export type Products = z.infer<typeof contentSchema>

export type Category = z.infer<typeof sectionSchema>

export type Product = z.infer<typeof itemSchema>

export type ModifierProduct = z.infer<typeof modifierSchema>

export type CartProduct = z.infer<typeof cartProductSchema>

export type CartProductModifier = z.infer<typeof cartProductModifierSchema>
