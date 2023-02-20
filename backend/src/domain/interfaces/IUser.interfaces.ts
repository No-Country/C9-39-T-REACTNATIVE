export interface IUser {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    isVerified: boolean,
    totalAmount: number,
    createdAt: Date,
    updateAt: Date,
    codeVerification: number,
    expenses: string[],
    income: string[],
}