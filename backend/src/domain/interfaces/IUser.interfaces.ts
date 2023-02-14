export interface IUser {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    isVerified: boolean,
    createdAt: Date,
    updateAt: Date,
    codeVerification: number,
    expenses: string[],
    income: string[],
}