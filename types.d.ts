// Transaction
declare interface PaymentOptions {
    currency: string,
    merchantRef: string,
    amount: number,
    description: string,
    customerId?: string,
    customerName?: string,
    customerEmail?: string,
    customerMobile?: string,
    integrationKey?: string,
    returnUrl?: string,
    productCode?: string,
    splits: [
        {

            amount: number,
        }
    ]

}

declare interface PaymentPageOptions {
    firstname: string,
    lastname: string,
    phone: string,
    amount: number,
    email: string,
    page?: number | string
}

declare interface CreateSubAccountOptions {
    businessId: number,
    bankAccount: string,
    subAccountName: string,
    bankSortCode: string,
    businessCode: string,
    isMainAccount: boolean,
    walletType: string,
    walletCode: string
}

declare interface UpdateSubAccountOptions {
    businessCode: string,
    businessId?: number
    bankAccount?: string,
    subAccountName?: string,
    bankSortCode?: string,
    isMainAccount?: boolean,
    walletType?: string,
    walletCode?:string 
}