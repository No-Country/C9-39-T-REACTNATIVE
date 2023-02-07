import express from 'express'

let server = express()

let rootRouter = express.Router()

rootRouter.get('/')

server.use('/', rootRouter)

export default server