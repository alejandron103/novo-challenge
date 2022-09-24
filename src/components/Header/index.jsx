import { useEffect, useState } from 'react'
import getItemsMenu from '../../services/get-items-menu'
import Menu from '../Menu'
import UserMenu from '../UserMenu'
import '../../styles/components/Header.scss' 

export function Header(){
    const [itemsMenu, setItemsMenu] = useState([])

    useEffect(()=>{
        async function fetchData(){
          const fetchedItemsMenu = await getItemsMenu();
          setItemsMenu(fetchedItemsMenu)
        }
        fetchData();
    }, [])

    return (
        <header className="Header">
            <section className="Header__top">
                <svg xmlns="http://www.w3.org/2000/svg" className='Logo' width="159" height="34" viewBox="0 0 159 34">
                    <text transform="translate(0 29)"><tspan x="0" y="0">Tu PruTec</tspan></text>
                </svg>
                <UserMenu/>
            </section>
            <Menu itemsMenu={itemsMenu}/>
        </header>
    )
}