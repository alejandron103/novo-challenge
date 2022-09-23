import Logo from '../assets/logo.svg'
export function Header(){
    return (
        <header className="Header">
            <img
                className='Header__logo' 
                src={Logo} 
                alt="logo del header"
            />
            <div className="UserMenu">
                <span className="UserMenu__name"></span>
            </div>
        </header>
    )
}