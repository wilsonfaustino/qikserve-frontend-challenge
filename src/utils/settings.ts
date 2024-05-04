import { env } from '~/env'
import { settingsSchema } from '~/schemas/settings'

export async function getSettings() {
  const res = await fetch(`${env.SETTINGS_URL}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const parsedSettings = settingsSchema.safeParse(await res.json())

  if (!parsedSettings.success) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(parsedSettings.error.issues.map((issue) => issue.message).join('\n'))
  }

  return parsedSettings.data
}
