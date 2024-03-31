import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    subTotalAmount : number
    tipAmount: number
    totalAmount: number
    placeOrder: () => void
}


const OrderTotals = ({subTotalAmount,tipAmount,totalAmount,placeOrder} : OrderTotalsProps) => {

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
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className=" w-full bg-black uppercase mt-10 text-white p-3 font-bold"
                onClick={placeOrder}
            >
                  Guardar Orden
            </button>
        </>
    )
}

export default OrderTotals