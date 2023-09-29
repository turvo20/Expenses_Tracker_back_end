import { config, sequelizeInstance } from './src/config'
import loader from './src/loaders'
import express from 'express'
import api from './src/routers'

function startServer() {
    const app = express()
    // console.log(esp);
    loader.init({
        expressApp: app,
        appRoutes: api(),
        sequelizeInstance
    })

    app.listen(config.SERVER_PORT, (err) => {
        if (err) console.error(err);
        console.log(`Server is running on Port: ${config.SERVER_PORT}`);;
    })
}

startServer()