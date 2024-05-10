/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const prettierConfig = require('../.prettierrc.cjs')

const files = fs.readdirSync(path.resolve(__dirname, '../intl/messages/en'))

let types = `
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
 *
 * INFO: This file was updated by the command "pnpm next generate-message-types"
 *
 */

type Messages = {\n`

for (const file of files) {
  const key = path.basename(file, '.json')
  types += ` '${key}': typeof import('../../intl/messages/en/${file}')\n`
}

types += `}

declare interface IntlMessages extends Messages {}
`

prettier.format(types, { ...prettierConfig, parser: 'typescript' }).then((formatted) => {
  fs.writeFileSync(path.resolve(__dirname, '../src/@types/intl.d.ts'), formatted)
  const printIndex = process.argv.indexOf('--print')
  if (printIndex > -1) {
    process.stdout.write(formatted)
  }
})
