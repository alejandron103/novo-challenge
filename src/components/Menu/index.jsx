import ItemMenu from "../MenuItem";

export default function Menu({itemsMenu}){
    return (
        <nav>
            <ul className="MainMenu">
                 {
                    itemsMenu.map( ([item, subItems], index) => 
                        <ItemMenu 
                            key={index}
                            item={item} 
                            subItems={subItems} 
                        />
                    )
                }
            </ul>
        </nav>
    )
}