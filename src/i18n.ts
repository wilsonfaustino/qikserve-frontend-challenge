import { getRequestConfig } from 'next-intl/server'

// INFO: keep it sorted
const files = ['menu']

export const supportedLocales = ['en', 'pt']

export default getRequestConfig(async ({ locale }) => {
  const messages = await Promise.all(
    files.map(async (file) => {
      const messageFile = await import(`../intl/messages/${locale}/${file}.json`)
      return { [file]: messageFile.default }
    }),
  )
  return {
    timeZone: 'America/Sao_Paulo',
    messages: Object.assign({}, ...messages),
  }
})
