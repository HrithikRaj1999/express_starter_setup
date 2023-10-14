# express_starter_setup
This is created in type script for basic express typescript setup 

## Steps to setup  backend -api express with mongo and mongoose and typescript

1 npm init -y
2 npm install -save-dev typescript
3 npx tsc --init
4 npm i express
5 npm i -D @types/express

6 create a new file server.ts ->all the main configurations in it

7 go to tsconfig.json -> uncomment "outDir":"./dist" <-add this 

8 npm i -D nodemon
9 npm i -D ts-node  //important
10 npm i -D eslint
11 npx eslint --init

Select these Settings
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm


12 npx eslint . --ext .ts

13 add lint in scripts in package.json { "lint": "eslint . --ext .ts"}

14 add eslint extension in vs code

15 npm i dotenv 

16 npm i mongoose

17 npm i envalid and then validate env variables because we cannot setr type of variables in typescript
