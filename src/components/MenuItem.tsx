import { MenuItem } from "../types"


type MenuItemProps = {
    item: MenuItem
}


const MenuItem = ({item} : MenuItemProps ) => {
    return (
        <div>
            <button
                className=" border-2 border-teal-400 hover:bg-teal-200 p-3 w-full flex justify-between"
            >
                <p>{item.name}</p>
                <p className=" font-black">${item.price}</p>
            </button>
        </div>
    )
}

export default MenuItem