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

## important commands (PROCEDURE to follow)
#### the links contains all command
https://orm.drizzle.team/docs/kit-overview


### `npx drizzle-kit generate`
- this will change your code -> raw sql code
- this will auto generate migrations and auto create/inject __out__ into __db/migrations__ (drizzle.config.js)

### `npx drizzle-kit migrate`
- apply changes into NEON DB on cloud

### General commands

| Command               | Description                                                                                                   |
|-----------------------|---------------------------------------------------------------------------------------------------------------|
| `npx drizzle-kit generate` | Generates SQL migration files based on your Drizzle schema (initial or changed).                             |
| `npx drizzle-kit migrate`  | Applies generated SQL migration files to your database.                                                       |
| `npx drizzle-kit pull`     | Introspects your database schema, converts it to a Drizzle schema, and saves it to your codebase.             |
| `npx drizzle-kit push`     | Pushes your Drizzle schema to the database upon declaration or updated schema changes.                        |
| `npx drizzle-kit studio`   | Connects to your database and opens Drizzle Studio for convenient database browsing.                          |
| `npx drizzle-kit check`    | Checks all generated migrations for race conditions or collisions.                                            |
| `npx drizzle-kit up`       | Upgrades snapshots of previously generated migrations.                                                        |


## 29:38'