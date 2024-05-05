import { env } from '~/env'
import { contentSchema } from '~/schemas/content'

export async function getContent() {
  const res = await fetch(`${env.CONTENT_URL}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const parsedSettings = contentSchema.safeParse(await res.json())

  if (!parsedSettings.success) {
    // This will activate the closest `error.js` Error Boundary
    console.log(parsedSettings.error.issues)
    throw new Error(parsedSettings.error.issues.map((issue) => `${issue.path} - ${issue.message}`).join('\n'))
  }

  return parsedSettings.data
}
