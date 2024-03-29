import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder(){
    const [order,setOrder] = useState<OrderItem[]>([])//el arreglo de la orden

    const addItem = (item : MenuItem) => {
        const newItem: OrderItem = {...item, quantity:1}
        setOrder([...order,newItem])
    }
    return{
        addItem
    }
}