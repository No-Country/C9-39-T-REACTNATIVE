export interface IDischarge{
    title: string,
    description: string,
    createAt: Date,
    amount: number,
    userId: string[],
    typeDischarge: string[],
}