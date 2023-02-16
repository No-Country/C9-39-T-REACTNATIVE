import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASS, // generated ethereal password
    },
});

export const sendEmail = async ({ email, firstname, url }: any) => {

    try {

        await transporter.sendMail({
            from: `${process.env.EMAIL}`,
            to: email,
            subject: 'Gringotts',
            text: 'Gracias por crearte una cuenta en Gringotts',
            html: `
            <h2>Gracias ${firstname} por crearte una cuenta</h2>
            Ingresa a este link para validar tu correo: <b>{${url}}</b>
            `
        })
    } catch (error) {
        console.log('Error to send email', { error })
    }
}

export const resetPassowrdEmail = async ({ email, firstname, code }: any) => {

    try {
        console.log(code)
        await transporter.sendMail({
            from: `${process.env.EMAIL}`,
            to: email,
            subject: 'Gringotts recuperar contraseña',
            text: 'Usa el codigo de verificación',
            html: `
            <h2>Hola ${firstname} usa el siguiente código para resetear tu contraseña ${code}</h2>
            `
        })
    } catch (error) {
        console.log('Error to send email', { error })
    }
}