import { getDischargesByUser } from '../services/Discharge.services'
import { updateTotalAmountByMonth } from './TotalAmount.services'




export const getUserStatics = async (id: string): Promise<any | undefined> => {

    try {

        const total = await updateTotalAmountByMonth(id)
        const expenses = await getDischargesByUser(id)
        const totalAmount = total.totalAmount
        let categoryPercentages: any = {}
        
        const categories = expenses.data.reduce((acc: any, curr: any) => {
            const { category, amount } = curr;
            const isCategory = category[0].name

            if (!acc[isCategory]) {
                acc[isCategory] = 0;
            }
            acc[isCategory] += amount;
            return acc;
        }, {})

        for (let cat in categories) {
            const categoryAmount = categories[cat];
            const percentage = (categoryAmount / totalAmount) * 100;
            categoryPercentages[cat] = percentage;
        }
        
        return { categoryPercentages, totalAmount }
    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to get discharges or incomes by ID' }
    }
}