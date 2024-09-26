start by writing `npm init --y`
This will open a new file package.json -> all the settings are stored here.

npm = node package manager (https://www.npmjs.com/)

```npm install -D typescript tsc ts-node @types/node nodemon``` 

- installing dev-dependencies for typescript, tsc, ts-node, @types/node, nodemon, all the files we need to run typescript)

add tsconfig.json file -> this file will have all the settings for typescript
```
{
    "compilerOptions": {
        "target": "es6", // target version of javascript
        "module": "commonjs", // module system
        "outDir": "./dist", // output directory
        "rootDir": "./src", // root directory
        "strict": true, // strict type checking
        "esModuleInterop": true, // compatibility with commonjs and es6
        "forceConsistentCasingInFileNames": true, // force consistent casing in file names
        "resolveJsonModule": true, // resolve json module
        "sourceMap": true // source map
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/*.spec.ts"]
}
```

create /src folder and add index.ts file

add to package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.ts"
}
```

run `npm run dev` to start the server



