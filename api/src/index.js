require('dotenv').config()

const { Application } = require('./application')

const configuration = {
    database: {
        name: process.env.DATABASE_NAME,
        url: process.env.DATABASE_URL
    },
    api: {
        host: process.env.API_HOST,
        port: Number(process.env.API_PORT),
        prefix: process.env.API_PREFIX
    }
}

const app = new Application(configuration)
app.start()
