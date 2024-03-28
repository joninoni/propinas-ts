import { MenuItem } from "../types"


type MenuItemProps = {
    item: MenuItem
}


const MenuItem = ({item} : MenuItemProps ) => {
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
    )
}

export default MenuItem