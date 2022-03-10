[![ci](https://github.com/juliocarneiro/boilerplate-next-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/juliocarneiro/boilerplate-next-ts/actions/workflows/ci.yml) <img src="https://img.shields.io/github/last-commit/juliocarneiro/boilerplate-next-ts/master"> <img src="https://img.shields.io/snyk/vulnerabilities/github/juliocarneiro/boilerplate-next-ts">

This is a [Next.js](https://nextjs.org/) boilerplate with Typescript and Styled-Components.

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Snyk](https://github.com/snyk/snyk)

## Getting Started

First, install snyk and project dependencies:

```bash
yarn global add snyk
```

```bash
yarn
```

Now, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `security`: runs snyk for search vulnerabilities
- `protect`: update libs with vulnerabilities

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Amazon S3

Automatic deploy to Amazon S3 with pipeline in github actions and workflows.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
