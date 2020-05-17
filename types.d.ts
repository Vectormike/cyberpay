// Payment
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

declare interface PaymentWithTokenOptions {
    currency?: string,
    merchantRef?: string,
    amount: number,
    description?: string,
    customerId?: string,
    customerName?: string,
    customerEmail?: string,
    customerMobile?: string,
    returnUrl?: string,
    productCode?:string,
    clientType?: string,
    webhookUrl?: string,
    authToken?: string,
    splits: [
        {
            walletCode?: string,
            amount: number,
        }
    ]
}

declare interface PaymentWithBankOptions {
    bankCode: string,
    accountNumber: string,
    referrence: string,
    accountName?: string,
    dateofBirth?: string,
    bvn?: string
}
declare interface PaymentPageOptions {
    firstname: string,
    lastname: string,
    phone: string,
    amount: number,
    email: string,
    page?: number | string
}


declare interface CardPaymentOptions {
    name?: string,
    expiryMonth: number,
    expiryYear: number,
    cardNumber: string,
    cvv: string,
    otherInfo?: string,
    reference: string,
    cardPin?: string,
    channel?: string,
    processCode?: string,
    providerId?: number  
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


// Transaction 
declare interface TransactionsOptions {
    referrenceNumber: string,
    merchantRef: string
}

// Wallet Top Up
 declare interface WalletTopUpOptions {
     currency?: string,
     merchantRef: string,
     amount: number,
     description?: string,
     customerName?: string,
     customerEmail?: string,
     customerMobile?: string,
     walletId: string,
     returnUrl: string 
 }

 declare interface TopUpAnotherWalletOptions {
     amount: number,
     businessWalletId: string,
     topUpWalletId: string,
     businessCode: string
 }