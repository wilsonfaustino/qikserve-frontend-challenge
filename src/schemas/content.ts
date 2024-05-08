import { z } from 'zod'

export const imageSchema = z.object({
  id: z.number(),
  image: z.string(),
})

const availabilityTypeSchema = z.enum(['AVAILABLE_NOW', 'NOT_AVAILABLE'])

export const modifierItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  maxChoices: z.number(),
  position: z.number(),
  visible: z.number().optional(),
  availabilityType: availabilityTypeSchema,
  available: z.boolean(),
})

export const modifierSchema = z.object({
  id: z.number(),
  name: z.string(),
  minChoices: z.number(),
  maxChoices: z.number(),
  items: z.array(modifierItemSchema),
})

export const itemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable().optional(),
  alcoholic: z.number(),
  price: z.number(),
  position: z.number(),
  visible: z.number().optional(),
  availabilityType: availabilityTypeSchema,
  sku: z.string().optional(),
  images: z.array(imageSchema).optional(),
  available: z.boolean(),
  modifiers: z.array(modifierSchema).optional(),
})

export const sectionSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable().optional(),
  position: z.number(),
  visible: z.number().optional(),
  images: z.array(imageSchema),
  items: z.array(itemSchema),
})

export const contentSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  collapse: z.number(),
  sections: z.array(sectionSchema),
})

export const cartProductModifierSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  parentId: z.number(),
})

export const cartProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  modifiers: z.array(cartProductModifierSchema).optional(),
})
