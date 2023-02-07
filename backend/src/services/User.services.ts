import { userEntity } from "../domain/entities/User.entity";



export const createUser = async (user: any): Promise<any | undefined> => {

    try {
        let userModel = userEntity()

        //Create new User
        const created = await userModel.create(user)
        return {success: true, created}
    } catch (error) {
        console.log(error)
        return { success: false, error: `Hubo un error ${error}` }
    }
}