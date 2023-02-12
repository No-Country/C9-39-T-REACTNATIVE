import { categoryEntity } from "../domain/entities/Category.entity"


export const createCategory = async (category: any) => {

    try {
        const categoryModel = categoryEntity()

        const created = await categoryModel.create(category)

        return { succes: true, created}
    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to create a new category'}
    }
}

export const getAllCategoty = async () => {

    try {
        const categoryModel = categoryEntity()

        const data = await categoryModel.find()

        return {success: true, data}

    } catch (error) {
        console.log(error)
        return { success: false, message: 'Error to get all category'}
    }
}