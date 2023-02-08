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

export const getAllUser = async (): Promise<any | undefined> =>{

    try {

        let userModel = userEntity()

        let data = await userModel.find({ isDelete: false })

        return {success: true, data}
    } catch (error) {
        console.log(`Error getting all users ${error}`)

        return {success: false, error}
    }

}

export const getUserById = async (id: string): Promise<any | undefined> => {

    try {
        let userModel = userEntity()

        let data = await userModel.findById(id)
        
        return {success: true, data}
    } catch (error) {
        console.log(`Error getting user by ID ${error}`)

        return {success: false, message: 'Not found user'}
    }
}

export const updateUserById = async (id:string, data:any): Promise<any | undefined> => {

    try {
        let userModel = userEntity()

        const user = await getUserById(id)

        if(!user){
            throw new Error('User not found')
        }

        const updated = await userModel.findByIdAndUpdate(id, data)

        return {success: true, updated}

    } catch (error) {
        console.log(error)

        return {success: false, message: `Error to update user ${error}`}
    }
}

export const deleteUserById = async (id: string): Promise<any | undefined> => {

    try {
        let userModel = userEntity()

        const deleted = await userModel.deleteOne({_id: id})

        return {success: true, deleted}
    } catch (error) {
        console.log(error)
        return {success: false, message: `Error to delete user ${error}`}
    }
}