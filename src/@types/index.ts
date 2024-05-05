import type { z } from 'zod'

import type { contentSchema } from '~/schemas/content'
import type { settingsSchema } from '~/schemas/settings'

export type Settings = z.infer<typeof settingsSchema>['webSettings']

export type Content = z.infer<typeof contentSchema>
