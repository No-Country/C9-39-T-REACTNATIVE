import express, {Express, Request, Response} from 'express'
import rootRouter from '../router/index'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const server: Express = express()
const port: string | number = process.env.PORT || 8000

server.use('/api',
            rootRouter)

//Static server
server.use(express.static('public'))

//Mongoose Connection
mongoose.connect('mongodb+srv://admin:nocountry123@clusterpractice.qhazbpk.mongodb.net/test')

//Content Type Config
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json())

//Redirection Config
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
})


export default server