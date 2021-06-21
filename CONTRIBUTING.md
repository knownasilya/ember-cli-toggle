# How To Contribute

## Installation

- `git clone <repository-url>`
- `cd my-addon`
- `npm install`

## Linting

- `npm run lint`
- `npm run lint:fix`

## Running tests

- `ember test` – Runs the test suite on the current Ember version
- `ember test --server` – Runs the test suite in "watch mode"
- `ember try:each` – Runs the test suite against multiple Ember versions

## Running the dummy application

- `ember serve`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Commit Messages

We're using `standard-version` for changelog generation and releases. Have a look at the conventions [here].

The following additional prefixes, are used as well.

- `docs`
- `chore`
- `tests`
- `demo` (regarding the dummy app, since it's made public)

[here]: https://www.npmjs.com/package/standard-version#commit-message-convention-at-a-glance

## Releasing a new version

See https://www.npmjs.com/package/standard-version for instructions on generating change logs and commit formats.

```bash
npm run release
```

Will do the work of generating the changelog and bumping the version, tagging.
You just need to copy the command it provides to push and publish the changes.

## Github Pages/Demo

Build by checking out the relevant branch, since the test dummy app
is actually the demo app.

Run the following command:

```no-highlight
ember github-pages:commit --message <message describing demo release>
```
