import { CategoryIncome } from "../domain/entities/CategoryIncome.entity"
import { CategoryDischarge } from "../domain/entities/CategoryDischarge.entity"


export const createDischargeCategory = async (category: any) => {

    try {
        const categoryModel = CategoryDischarge

        const created = await categoryModel.create(category)

        return { succes: true, created }
    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to create a new category' }
    }
}

export const getAllDischargeCategoty = async () => {

    try {
        const categoryModel = CategoryDischarge

        const data = await categoryModel.find()

        return { success: true, data }

    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to get all category' }
    }
}

export const createIncomeCategory = async (category: any) => {

    try {
        const categoryModel = CategoryIncome

        const created = await categoryModel.create(category)

        return { sucees: true, created }
    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to create a new category' }
    }
}

export const getAllIncomeCategory = async () => {

    try {
        const categoryModel = CategoryIncome

        const data = await categoryModel.find()

        return { success: true, data }

    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to get all category' }
    }
}