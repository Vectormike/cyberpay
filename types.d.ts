// Transaction
declare interface TransOptions {
    Currency: string,
    MerchantRef: string,
    Amount: number,
    Description: string,
    CustomerId?: string,
    CustomerEmail?: string,
    CustomerMobile?: string,
    IntegrationKey?: string,
    ReturnUrl?: string,
    ProductCode?: string,
}