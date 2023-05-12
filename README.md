# Practical-6

- optimize code
- add environments in the code
- generate staging and production build

## 🚀 Live Demonstraion

- [User list app](https://charming-crepe-5c855d.netlify.app/)

## Setup for Environment variable

- Vite uses dotenv to load additional environment variables from the following files in your environment directory:

```
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git

```

### To set up environment variables in a Vite React project, you can follow these steps:

1. Create a `.env` file in the root of your project. You can name this file `.env.development` for development-specific variables or `.env.production` for production-specific variables or `.env.staging` for testing-specific variable.

2. Add your environment variables to the .env file in the following format: `VARIABLE_NAME=variable_value`.To prevent accidentally leaking env variables to the client, only variables prefixed with `VITE_` are exposed to your Vite-processed code. For example:

```
VITE_SOME_KEY=123
```

3. In your code, you can access the environment variables using the `import.meta.env` object. For example:

```
console.log(import.meta.env.VITE_SOME_KEY)
```

## How to run in different mode

- clone this project and run `npm install` to install all packages.

## Development Mode

- to run this project in development mode go to project directory in terminal and run this command:

`npm run dev`

## Staging Mode

- to run and see this project in Staging mode follow bellow steps:

### step 1 : create .env.staging file in root folder write below code

```
VITE_APP_TITLE = Staging Build
```

### step 2 : go to terminal and write this command

`npm run build:staging`

- this will generate staging build of your code.

### step 3 : To serve this build first install serve package and serve build.

`npm install serve` : It is a command used to install the serve package from the npm registry. The serve package is a simple, zero-configuration command-line http server that can be used to serve static files from a directory.

- Then go to dist folder and serve build.

```
cd dist
serve -s
```

## Production Mode

- to run and see this project in production mode follow bellow steps:

### step 1 : create .env.production file in root folder write below code

```
VITE_APP_TITLE = Production Build
```

### step 2 : go to terminal and write this command

`npm run build`

- this will generate Production build of your code.

### step 3 : To serve this build first install serve package and serve build.

`npm install serve` : It is a command used to install the serve package from the npm registry. The serve package is a simple, zero-configuration command-line http server that can be used to serve static files from a directory.

- Then go to dist folder and serve build.

```
cd dist
serve -s
```
