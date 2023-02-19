export interface IIncome {
    title: string,
    description: string,
    createAt: Date,
    amount: number,
    type: string,
    userId: string[],
    category: string[],
}