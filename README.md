## setting up the backedn
- nodemon help on ctrl+s they refesh automatically to latest update
```bash
npm init -y
npm i express
npm install @neondatabase/serverless dotenv cors
npm i drizzle-orm cron
npm i -D drizzle-kit
npm i nodemon -D
```

## package.json file should look like this
### i change i few thing like "test" -> "dev" / add type module
```bash
{
  "name": "backend",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
  "keywords": [],
  "type": "module",
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@neondatabase/serverless": "^1.0.2",
    "cors": "^2.8.5",
    "cron": "^4.3.4",
    "dotenv": "^17.2.3",
    "drizzle-orm": "^0.44.7",
    "express": "^5.1.0"
  },
  "devDependencies": {
    "drizzle-kit": "^0.31.7",
    "nodemon": "^3.1.11"
  }
}
```

## env file
```bash
## env file
```bash
PORT=5001
DATABASE_URL=test
NODE_ENV=development
```
```

## running command
```bash
npm run dev
```

