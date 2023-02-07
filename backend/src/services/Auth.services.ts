import bcrypt, { genSalt, hash } from "bcrypt"
import { userEntity } from "../domain/entities/User.entity"
import { createUser } from "./User.services"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()
let secret = process.env.SECRET

export const registerUser = async (firstname: string, lastname: string, email: string, password: string, phone: number, birthday: Date, status: string): Promise<any | undefined> => {

    try {
        let userModel = userEntity()

        // Check if there is a user with that email
        let isRegister = await userModel.findOne({email: email})

        if(isRegister){
            return {message: 'There is a user with that email'}
        }

        const salt = await genSalt(10)
        const encrypted = await hash(password, salt)
        
        let user ={
            firstname,
            lastname,
            email,
            password: encrypted,
            phone,
            birthday,
            status
        }

        const registered = await createUser(user)

        return {success: true, registered}      
    } catch (error) {
        console.log(error)
        return { success: false, error: `Hubo un error ${error}` }
    }
}

export const login = async (email: string, password: string) => {

    try {
        let userModel = userEntity()

        let userFound = await userModel.findOne({email: email})

        if(!userFound){
            return { message: 'User not found'}
        }

        //Check if Password is Valid (compare with bcrypt)
        let validPassword = bcrypt.compareSync(password, userFound.password)

        if(!validPassword){
            console.log('Password is not valid')
            throw new Error('Password is note valid')
        }

        let token = jwt.sign({email: userFound.email}, `${secret}`,{ expiresIn: "1d"})

        return {
            user: userFound,
            token: token,
            success: true
        }

    } catch (error) {
        console.log('Error to authenticate')
        return error
    }
}