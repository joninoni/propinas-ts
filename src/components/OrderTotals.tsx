import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    subTotalAmount : number
    tipAmount: number
}


const OrderTotals = ({subTotalAmount,tipAmount} : OrderTotalsProps) => {
    
    return (
        <>
            <div className=" space-y-3">
                <h2 className="font-black text-2xl">Totales Y Propina</h2>

                <p>Subototal a pagar : {""}
                    <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
                </p>

                <p>Propina {""}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total a pagar {""}
                    <span className="font-bold">$0</span>
                </p>
            </div>
        </>
    )
}

export default OrderTotals