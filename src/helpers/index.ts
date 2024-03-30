export function formatCurrency(quantity : number){
    const money = new Intl.NumberFormat( "en-US",{
        style : "currency",
        currency:"USD"
    })

    return money.format(quantity)
}