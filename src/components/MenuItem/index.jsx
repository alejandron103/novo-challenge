import { MAP_TRADUCTIONS } from "../../constants";
import { findElementInMapObject } from "../../utils";
import SubMenu from "../SubMenu";


export default function ItemMenu({item, subItems}){
    return <li>
        { findElementInMapObject(item, MAP_TRADUCTIONS)}
    <SubMenu subMenuItems={subItems}/>
</li>
}