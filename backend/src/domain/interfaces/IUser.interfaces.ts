export interface IUser {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    phone: number,
    birthday: Date,
    status: string,
    isVerified: boolean,
    createdAt: Date,
    updateAt: Date,
    expenses: [],
    income: [],
}