import { NextFunction, Response } from "express"
import { JWTService } from "src/config/jwt.config"
import {getUserById} from "../services/User.services"

export const authenticate = async (req: any, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers

        if (!authorization || !authorization.startsWith('Bearer')) {
            throw 'No tenes Token'
        }

        const { 1: token } = authorization.split(' ')

        if (!token) {
            throw 'Token incorrecto'
        }

        const { id } = JWTService.verify(token)

        const user = await getUserById(id)
        req.user = user

        next()
    } catch (error) {
        next(error)
    }
}