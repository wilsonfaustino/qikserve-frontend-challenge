# QikServe - Challenge - Front End Developer

---

This is a [Next.js](https://nextjs.org/) project for a QikServe Challenge, with some flavors like Tailwind, Vitest and Testing-Library.

## Project Overview
This project aims to deliver a white-label application example. Users can select products and add to basket, see the basket list and total price. It's built with Next.js and a range of complementary tools to provide a robust and efficient development experience.
If you want to see a preview of this project running you can follow on this [link](https://qikserve-frontend-challenge-eta.vercel.app/).

## What is inside?

- [Next.js](https://nextjs.org/) - A popular React framework with server-side rendering (SSR) and static site generation (SSG) capabilities for building high-performance web applications.
- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces, particularly for creating reusable UI components.
- [TypeScript](https://www.typescriptlang.org/) - A strongly-typed programming language that builds on JavaScript, enabling better tooling and developer experience.
- [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework that provides pre-defined classes to design responsive and consistent UIs quickly.
- [next-intl](https://next-intl-docs.vercel.app/) - A localization library for internationalizing Next.js applications with built-in language switching support.
- [Vitest](https://vitest.dev/) - A fast, lightweight test runner for unit testing that is deeply integrated with Vite for instant feedback.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - A library focused on testing React components in a way that resembles real-world usage.
- [Eslint](https://eslint.org/) - A pluggable linter tool to identify and fix problems in JavaScript code, helping maintain code quality.
- [Prettier](https://prettier.io/) - An opinionated code formatter that ensures consistent coding style across the entire project.
- [Husky](https://github.com/typicode/husky) - A tool for managing Git hooks, allowing automatic running of scripts like linters before making a commit.
- [Lint-Staged](https://github.com/okonet/lint-staged) - A tool to run linters only on staged files before committing, improving code quality while minimizing CI/CD overhead.
- [Plop](https://plopjs.com/) - A micro-generator framework that automates the creation of new project components or files based on predefined templates.
- [zod](https://zod.dev/) - A TypeScript-first schema declaration and validation library that ensures consistent data validation.
- [Recoil](https://recoiljs.org/) - A state management library for React, offering a simple way to manage shared state between components.
- [Radix-ui](https://www.radix-ui.com/) - A collection of open-source, high-quality React components designed with accessibility in mind.

## Getting Started

Then, run the development server:

```
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you like to try the production build, run:

```
pnpm build
```

And then:

```
pnpm start
```

## Commands

- `dev`: runs your application in development mode
- `build`: creates the production build
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test:unit`: runs vitest once
- `watch:unit`: runs vitest in watch mode
- `coverage`: runs vitest creating a coverage report
- `coverage:preview`: starts a server with the coverage report files
- `generate`: runs plop to generate component files
- `generate-message-types`: runs script to generate types for next-intl

---

Made with ♥️ by Wilson Faustino
