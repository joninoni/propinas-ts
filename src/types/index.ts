//typado para el arreglo de platillos
export type MenuItem = {
    id: number
    name: string
    price: number
}

//typado para el arreglo de la orden
export type OrderItem = MenuItem &{
    quantity: number
}