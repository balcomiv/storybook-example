# StorybookExample

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@storybook-example/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

# Commands Used to Build Starter Project

- `npx create-nx-workspace@latest storybook-example`
- `nx g library shared/ui --tag=scope:shared,type:ui`
- `nx g c nav --flat -s -t --skipTests --project=shared-ui`
- `npm i @nrwl/storybook -D`
- `nx g @nrwl/angular:storybook-configuration shared-ui`
- `nx run shared-ui:storybook`

# Storybook

## Issues

- https://giters.com/nrwl/nx/issues/7823

## Duncan Hunter

- https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/6-angular-material
- `@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';`

## Material Styles

- https://issuehunt.io/r/storybookjs/storybook/issues/14912
- https://issueexplorer.com/issue/nrwl/nx/7054

- https://dev.to/vitorstick/sharing-styles-between-apps-inside-nx-workspace-20i5

## Mocking

- https://ultimatecourses.com/blog/mocking-apis-storybook-nx-monorepo
