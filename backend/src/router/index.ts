import express from 'express'
import authRouter from './Auth.routes'
import userRouter from './User.routes'

let server = express()

let rootRouter = express.Router()

rootRouter.get('/')

server.use('/', rootRouter)
// User routes
server.use('/users', userRouter)
// Auth routes
server.use('/auth', authRouter)

export default server