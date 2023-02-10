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