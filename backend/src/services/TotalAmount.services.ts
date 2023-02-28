import { Discharge } from "../domain/entities/Discharge.entity";
import { Income } from "../domain/entities/Income.entity";
import { updateUserById } from "./User.services";

export const updateTotalAmountByMonth = async (id: string): Promise<any | undefined> => {

    try {
        let incomeModel = Income
        let dischargeModel = Discharge

        // Select the date range in the current month
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        let totalAmount = 0
        let incomesTotalAmount = 0
        
        // Obtain incomes and discharges by month
        let incomes = await incomeModel.find({ userId: id, createAt: { $gte: new Date(`${today.getFullYear()}-${currentMonth}-01`), $lte: today } }).populate('userId')
        let discharges = await dischargeModel.find({ userId: id, createAt: { $gte: new Date(`${today.getFullYear()}-${currentMonth}-01`), $lte: today } }).populate('category', 'name -_id')

        incomes.forEach((income:any) => {
            incomesTotalAmount += income.amount
            totalAmount += income.amount
        })
        discharges.forEach((income:any) => totalAmount -= income.amount)

        await updateUserById(id, {totalAmount})    

        return { totalAmount, incomesTotalAmount }
    } catch (error) {
        console.log(error)
        return { success: false, error: `Error to obtain total amount ${error}` }
    }
}