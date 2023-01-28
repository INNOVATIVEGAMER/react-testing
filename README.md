## Documentation -

For future reference please refer this playlist ---
https://www.youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd

## For static analysis setup on a repo ---

#### Eslint

Add the following script in package.json.

`"lint": "eslint --ignore-path .gitignore ."`

---

#### Prettier

Commands to run -

> yarn add -D --exact prettier
> yarn add -D eslint-config-prettier

Add the following in eslintConfig->extends array in package.json.

`"eslint-config-prettier"`

Add the following scripts in CRA application.

`"check-format": "prettier --ignore-path .gitignore --check \"**/*.{ts,tsx,css,scss}\""`

`"format": "prettier --ignore-path .gitignore --write \"**/*.{ts,tsx,css,scss}\""`

---

#### Husky

Commands to run -

> npx husky-init && yarn
> npx husky add .husky/pre-push

Change the pre-commit file in .husky folder to contain following commands (or the commands you want to run before each commit).

**Example** (check of eslint errors & formats the codebase) -

`yarn lint && yarn format`

Change the pre-push file .husky folder to contain following commands (or the commands you want to run before each push).

**Example** (generally we run all tests before each push) -

`yarn test -- --watchAll=false`

---

#### Lint Staged

Commands to run -

> yarn add -D lint-staged

Add the following in package.json.

`"lint-staged": {
    "*.{ts,tsx}": [
      "eslint"
    ],
    "*.{ts,tsx,css,scss}": [
      "prettier --write"
    ]
  }`

Change the pre-commit file now to run only on staged files and not entire codebase.

`yarn lint-staged`

---
