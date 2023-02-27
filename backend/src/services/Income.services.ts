import { Users } from "../domain/entities/User.entity"
import { Income } from "../domain/entities/Income.entity"
import { updateUserById } from "./User.services"





export const createIncome = async (income: any): Promise<any | undefined> => {

    try {
        let incomeModel = Income
        let userModel = Users

        // Find user by ID
        const user = await userModel.findById(income.userId)
        let totalAmount = user.totalAmount + income.amount

        // Update total amount of the user
        await updateUserById(income.userId, {totalAmount})

        // Create a new income
        const created = await incomeModel.create(income)

        // assign the expense id to the user
        user.income = user.income.concat(created._id)
        await user.save()

        return { success: true, created}
    } catch (error) {
        console.log(error)
        return { success: false, error: `Hubo un error ${error}` }
    }
}

export const getAllIncomes = async (): Promise<any | undefined> => {

    try {
        let incomeModel = Income

        const data = await incomeModel.find({isDelete: false}).populate('userId category')

        return {success: true, data}
    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to get all incomes' }
    }
}

export const getIncomesByUser = async (id: string): Promise<any | undefined> => {

    try {
        let incomeModel = Income

        let data = await incomeModel.find({userId: id}).populate('userId', 'firstname email')

        return { success: true, data}
    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to find incomes user' }
    }
}


export const updateIncomeById = async (id: string, data: any): Promise<any | undefined> => {

    try {
        let incomeModel = Income

        let updated = await incomeModel.findByIdAndUpdate(id, data)

        return { success: true, updated}
    } catch (error) {
        console.log(error)

        return { success: false, message: `Error to update income ${error}` }
    }
}

export const delteIncomeById = async (id: string): Promise<any | undefined> =>{

    try {
        let incomeModel = Income

        await incomeModel.deleteOne({_id: id})

        return {success: true, message: 'Income deleted successfully'}
    } catch (error) {
        console.log(error)

        return { success: false, message: `Error to delete income ${error}` }
    }
}