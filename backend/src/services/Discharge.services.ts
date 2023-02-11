import { userEntity } from "../domain/entities/User.entity"
import mongoose from "mongoose"
import { getUserById } from "./User.services"
import Discharge from '../domain/entities/Discharge.entity'

export const createDischarge = async (discharge: any): Promise<any | undefined> => {


    try {
        
        let userModel = userEntity()
        let newDischarge = new Discharge(discharge)
        // Find user by ID
        const user = await userModel.findById(discharge.userId)

        // Create a new discharge
        const created = await Discharge.create(newDischarge)

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

        const data = await Discharge.find({ isDelete: false }).populate({path: 'userId category', select: 'firstname _id name'})

        return { success: true, data }
    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to get all discharges'}
    }
}

export const getDischargeById = async (id: string): Promise<any | undefined> => {

    try {

        const data = await Discharge.findById(id).populate({path: 'userId typeDischarge', select: 'firstname _id name'})

        return { success: true, data }
    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to get discharges by ID'}
    }
}

export const updateDischargeById = async (id: string, data: any): Promise<any | undefined> => {
    try {

        const discharge = await getDischargeById(id)

        if(!discharge){
            throw new Error('Discharge not found')
        }

        const updated = await Discharge.findByIdAndUpdate(id, data)

        return { success: true, updated }

    } catch (error) {
        console.log(error)

        return { success: false, message: `Error to update discharge ${error}` }
    }
}

export const deleteDischargeById = async (id: string): Promise<any | undefined> => {

    try {

        await Discharge.deleteOne({_id: id})

        return {success: true, message: 'Discharge deleted successfully'}
    } catch (error) {
        console.log(error)

        return { success: false, message: `Error to delete discharge ${error}` }
    }
}