import { MenuItem, OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderContentsProps ={
    order: OrderItem[]
    subTotal: (price : number, quantity : number) => number
    removeFromOrder: (id : MenuItem["id"]) => void
}

const OrderContents = ({order,subTotal,removeFromOrder} : OrderContentsProps) => {

    return (
        <div>
            <h2 className="font-black text-4xl text-center">Consumo</h2>

            <div className=" space-y-3 mt-10">
                {
                    order.map( item => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"    
                        >
                            <div>
                                <p className=" text-xl">{item.name} - {formatCurrency(item.price)}</p>
                                
                                <p className=" font-black">
                                    Cantidad : {item.quantity} - 
                                    {formatCurrency(subTotal(item.price,item.quantity))}
                                </p>
                            </div>
                            <button
                                className="h-8 w-8 bg-red-600 rounded-full text-white font-black"
                                onClick={ () => removeFromOrder(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OrderContents