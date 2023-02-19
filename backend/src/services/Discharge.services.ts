import { Users } from "../domain/entities/User.entity"
import { Discharge } from "../domain/entities/Discharge.entity"
import { updateUserById } from "./User.services"


export const createDischarge = async (discharge: any): Promise<any | undefined> => {


    try {
        let dischargeModel = Discharge
        let userModel = Users

        // Find user by ID
        const user = await userModel.findById(discharge.userId)
        let totalAmount = user.totalAmount - discharge.amount

        // Update total amount of the user
        await updateUserById(discharge.userId, {totalAmount})

        // Create a new discharge
        const created = await dischargeModel.create(discharge)

        // assign the expense id to the user
        user.expenses = user.expenses.concat(created._id)
        await user.save()

        return created
    } catch (error) {
        console.log(error)
        return { success: false, error: `Hubo un error ${error}` }
    }
}

export const getAllDischarges = async (): Promise<any | undefined> => {

    try {
        let dischargeModel = Discharge

        const data = await dischargeModel.find({ isDelete: false }).populate('userId category')

        return { success: true, data }
    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to get all discharges' }
    }
}

export const getDischargeById = async (id: string): Promise<any | undefined> => {

    try {
        let dischargeModel = Discharge

        const data = await dischargeModel.findById(id).populate({ path: 'userId category', select: 'firstname _id name' })

        return { success: true, data }
    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to get discharges by ID' }
    }
}

export const getDischargeByName = async (name: string, id: string): Promise<any | undefined> => {

    try {
        //Regular expression so that it does not discriminate by upper and lower case letters
        let expName = new RegExp(name, 'i');

        const discharges = await getDischargesByUser(id)

        //Filter the expenses that contain the word in the title or description
        const filtered = discharges.data.filter((discharge: any ) => expName.test(discharge.title) || expName.test(discharge.description))

        return { success: true, filtered}
    } catch (error) {
        console.log(error)
        return { success: false, error }
    }
}

export const getDischargesByUser = async (id: string): Promise<any | undefined> => {

    try {
        let dischargeModel = Discharge

        let data = await dischargeModel.find({ userId: id }).populate('category')

        return { success: true, data }
    } catch (error) {
        console.log(error)
        return { success: false, error }
    }
}

export const updateDischargeById = async (id: string, data: any): Promise<any | undefined> => {
    try {
        let dischargeModel = Discharge

        const discharge = await getDischargeById(id)

        if (!discharge) {
            throw new Error('Discharge not found')
        }

        const updated = await dischargeModel.findByIdAndUpdate(id, data)

        return { success: true, updated }

    } catch (error) {
        console.log(error)

        return { success: false, message: `Error to update discharge ${error}` }
    }
}

export const deleteDischargeById = async (id: string): Promise<any | undefined> => {

    try {
        let dischargeModel = Discharge

        await dischargeModel.deleteOne({ _id: id })

        return { success: true, message: 'Discharge deleted successfully' }
    } catch (error) {
        console.log(error)

        return { success: false, message: `Error to delete discharge ${error}` }
    }
}