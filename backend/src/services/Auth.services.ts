import bcrypt, { genSalt, hash } from "bcrypt"
import { Users } from "../domain/entities/User.entity"
import { createUser } from "./User.services"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { JWTService } from "../config/jwt.config"
import { resetPassowrdEmail, sendEmail } from "../config/mail.config"
import Handlebars from 'handlebars'


dotenv.config()
let secret = process.env.SECRET


//Register user
export const registerUser = async (firstname: string, lastname: string, email: string, password: string, phone: number, birthday: Date, status: string): Promise<any | undefined> => {

    try {
        let userModel = Users

        // Check if there is a user with that email
        let isRegister = await userModel.findOne({ email: email })

        if (isRegister) {
            return { message: 'There is a user with that email' }
        }

        const salt = await genSalt(10)
        const encrypted = await hash(password, salt)

        let user = {
            firstname,
            lastname,
            email,
            password: encrypted,
            phone,
            birthday,
            status
        }

        const validateToken = JWTService.generate({ email }, '15m')

        const url = `http://localhost:8000/api/auth/validate/${validateToken}`

        sendEmail({ email, firstname, url })

        const registered = await createUser(user)

        return { success: true, registered }
    } catch (error) {
        console.log(error)
        return { success: false, error: `Hubo un error ${error}` }
    }
}

//Login user
export const login = async (email: string, password: string) => {

    try {
        let userModel = Users

        let userFound = await userModel.findOne({ email: email })
        const {_id, firstname, lastname, totalAmount} = userFound
        
        if (!userFound) {
            return { message: 'User not found' }
        }

        //Check if Password is Valid (compare with bcrypt)
        let validPassword = bcrypt.compareSync(password, userFound.password)

        if (!validPassword) {
            console.log('Password is not valid')
            throw new Error('Password is note valid')
        }

        let token = jwt.sign({ email: userFound.email }, `${secret}`, { expiresIn: "1d" })

        return {
            user: {
                _id,
                firstname,
                lastname,
                email,
                totalAmount
            },
            token: token,
            success: true,
        }

    } catch (error) {
        console.log('Error to authenticate')
        return error
    }
}


//Validate email
export const validateEmail = async (token: string) => {
    try {
        const userModel = Users
        let id: string = ''
        let isVerified: boolean = false

        const payload = await JWTService.verify(token);

        const data: any = await userModel.find({ email: payload.email })

        data.forEach((document: any) => {
            id = document._id.toHexString()
            isVerified = document.isVerified
        })
        
        if (!data) {
            return {
                message: 'Error with token'
            }
        }

        if (isVerified) {
            return {
                success: true,
                message: 'The user is already validated'
            }
        }
        
        await userModel.findByIdAndUpdate(id, {$set:{isVerified: true}}, {new: true})

        return { success: true, message: 'User successfully validated'}

    } catch (error) {
        console.log(error)
        return {success: false, error};
    }
}

//Send mail reset password
export const sendMailResetPassowrd = async (email: string) => {

    try {
        const userModel = Users
        
        const code = Math.floor(1000 + Math.random() * 9000)

        const user = await userModel.findOne({ email: email }).select('firstname') 
        
        let firstname: string = user.firstname
        let id: string = user._id
        
        const response = await userModel.findOneAndUpdate({email: email}, {codeVerification: code})
        console.log(response)

        resetPassowrdEmail({email, firstname, code})

        return {success: true, message: 'Send mail to reset password successfully', id}

    } catch (error) {
        console.log(error)
        return {success: true, message: 'error to send the email to reset the password'}
    }
}

//Code verification
export const codeVerification = async (code: number, id: string) => {

    try {
        const userModel = Users

        let user = await userModel.findById(id)
        
        if(!user){
            throw new Error('Error to find user')
        }

        if( code === user.codeVerification){
            return {success: true, message: 'Code validated'}
        }

    } catch (error) {
        console.log(error)
        return {success: false, message: error}
    }

}

//Reset password
export const resetPassowrd = async (password: string, id: string)  => {
    try {
        const userModel = Users

        const salt = await genSalt(10)
        const encrypted = await hash(password, salt)

        await userModel.findByIdAndUpdate(id, {password: encrypted})

        return { success: true, message: 'Password updated successfully'}
    } catch (error) {
        console.log(error)
        return {success: false, message: error}
    }
}