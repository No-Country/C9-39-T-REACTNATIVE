

export interface IUserService{
    // Create new User
    create(firstname: string,
        lastname: string,
        email: string,
        password: string, 
        phone: number, 
        birtday: Date, 
        status: string, 
        isVerified: boolean): Promise<any>
}