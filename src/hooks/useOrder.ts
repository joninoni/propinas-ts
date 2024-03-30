import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder(){
    const [order,setOrder] = useState<OrderItem[]>([])//el arreglo de la orden

    const addItem = (item : MenuItem) => {
        //verifica si existe
        const existItem = order.find( orderItem => orderItem.id === item.id)
    
        if(existItem){
            const updateOrder = order.map( orderItem => orderItem.id === item.id ? {...orderItem,quantity:orderItem.quantity + 1} : orderItem)
            setOrder(updateOrder)
        }
        else{
            const newItem: OrderItem = {...item, quantity:1}
            setOrder([...order,newItem])
        }
        
      
    }

    const subTotal=(quantity: number ,price: number)=>{
        return quantity * price
    }

    const removeFromOrder=(id : MenuItem["id"])=>{
        const updateOrder = order.filter (item => item.id !==id)
        setOrder(updateOrder)
    }

    return{
        order,
        addItem,
        subTotal,
        removeFromOrder,
    }
}