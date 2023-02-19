export interface IIncome {
    title: string,
    description: string,
    createAt: Date,
    amount: number
    userId: string[],
    category: string[],
}