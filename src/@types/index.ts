import type { z } from 'zod'

import type { settingsSchema } from '~/schemas/settings'

export type Settings = z.infer<typeof settingsSchema>['webSettings']
