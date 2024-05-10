// eslint-disable-next-line import/no-default-export
module.exports = async (plop) => {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'The name is required'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: '.plop/templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/index.ts',
        templateFile: '.plop/templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/test.tsx',
        templateFile: '.plop/templates/test.tsx.hbs',
      },
      {
        type: 'eslint',
        path: 'src/components/{{kebabCase name}}/*.tsx',
      },
    ],
  }),
    await plop.load('plop-action-eslint')
}
