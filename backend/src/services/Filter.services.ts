import { getAllDischarges, getDischargesByUser } from "./Discharge.services";
import { getUserById } from "./User.services";


export const filterByCategory = async (category: string, id: string): Promise<any | undefined> => {

    try {
        let catExp = new RegExp(category, 'i');
        //Obtain data for user by ID
        const discharges = await getDischargesByUser(id)        

        //Filter discharges by name
        const filtered = discharges.data.filter((discharge: any ) => catExp.test(discharge.category[0].name))
        
        return {success: true, filtered}
    } catch (error) {
        console.log(error)
        return {success: false, error}
    }
}