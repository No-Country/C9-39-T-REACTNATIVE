import dotenv from 'dotenv'
import server from "./src/server"

dotenv.config()


const port = process.env.PORT || 8000

//Execute SERVER
server.listen(port, () => {
    console.log(`[SERVER ON]: Runing in http://localhost:${port}/api`)
})


//Control SERVER ERROR
server.on('error', (error) => {
    console.log(`[SERVER ERORR]: ${error}`)
})
