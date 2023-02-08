import { userEntity } from "../domain/entities/User.entity"
import { dischargeEntity } from "../domain/entities/Discharge.entity"


export const createDischarge = async (discharge: any): Promise<any | undefined> => {


    try {
        let dischargeModel = dischargeEntity()
        let userModel = userEntity()

        // Find user by ID
        const user = await userModel.findById(discharge.userId)

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

// const assignDischarge = async (userid: string, dischargeId: string): Promise<any | undefined> => {
//     try {
//         let dis
//         const assigned = await 
//     } catch (error) {
        
//     }
// }