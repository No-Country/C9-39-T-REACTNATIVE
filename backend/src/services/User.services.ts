import { Users } from "../domain/entities/User.entity"




export const createUser = async (user: any): Promise<any | undefined> => {

    try {
        let userModel = Users

        //Create new User
        const created = await userModel.create(user)
        return { success: true, created }
    } catch (error) {
        console.log(error)
        return { success: false, error: `Hubo un error ${error}` }
    }
}

export const getAllUser = async (): Promise<any | undefined> => {

    try {

        let userModel = Users

        let data = await userModel.find().populate('expenses')

        return { success: true, data }
    } catch (error) {
        console.log(`Error getting all users ${error}`)

        return { success: false, error }
    }

}

export const getUserById = async (id: string): Promise<any | undefined> => {

    try {
        let userModel = Users

        let data = await userModel.findById(id).populate('expenses')

        return { success: true, data }
    } catch (error) {
        console.log(`Error getting user by ID ${error}`)

        return { success: false, message: 'Not found user' }
    }
}

export const updateUserById = async (id: string, data: any): Promise<any | undefined> => {

    try {
        let userModel = Users

        const user = await getUserById(id)

        if (!user) {
            throw new Error('User not found')
        }

        const updated = await userModel.findByIdAndUpdate(id, data)
        
        return { success: true, updated }

    } catch (error) {
        console.log(error)

        return { success: false, message: `Error to update user ${error}` }
    }
}

export const deleteUserById = async (id: string): Promise<any | undefined> => {

    try {
        let userModel = Users

        await userModel.deleteOne({ _id: id })

        return { success: true, message: 'User deleted successfully' }
    } catch (error) {
        console.log(error)
        return { success: false, message: `Error to delete user ${error}` }
    }
}