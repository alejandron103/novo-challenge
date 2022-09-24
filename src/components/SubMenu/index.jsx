import { getSubItems } from "../../utils"
import ItemMenu from "../MenuItem"

export default function SubMenu({subMenuItems}){
    const items = getSubItems(subMenuItems)
    if(items.length > 0){
        return <ul className="Submenu">
        {
            items.map( ([item, subItems], index) => 
            <ItemMenu 
                key={index}
                item={item} 
                subItems={subItems} 
            />
            )
        }
        </ul>
    }
}