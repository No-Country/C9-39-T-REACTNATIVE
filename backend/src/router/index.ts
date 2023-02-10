import express from 'express'
import authRouter from './Auth.routes'
import categoryRouter from './Category.routes'
import dischargeRouter from './Discharge.routes'
import userRouter from './User.routes'

let server = express()

let rootRouter = express.Router()

rootRouter.get('/')

server.use('/', rootRouter)
// User routes
server.use('/users', userRouter)
// Auth routes
server.use('/auth', authRouter)
// Discharge routes
server.use('/discharge', dischargeRouter)
//Category routes
server.use('/category', categoryRouter)

export default server