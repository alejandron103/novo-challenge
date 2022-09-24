import Logo from '../../assets/logo.svg'
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
                <img
                    className='Header__logo' 
                    src={Logo} 
                    alt="logo del header"
                />
                <UserMenu/>
            </section>
            <Menu itemsMenu={itemsMenu}/>
        </header>
    )
}