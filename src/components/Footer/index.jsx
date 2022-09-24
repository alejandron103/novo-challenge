import { CONSTANTS } from '../../constants'

export default function Footer(){
    const currentYear =  new Date().getFullYear()
    return <footer className="Footer">
       <svg xmlns="http://www.w3.org/2000/svg" width="111" height="25" viewBox="0 0 111 34"><text transform="translate(0 29)" fill="#fff" fontSize="31" fontFamily="GothamBold"><tspan x="0" y="0">Isotipo</tspan></text></svg>
        <p className="copyright">©  
            <span data-testid="year-copyright"> {currentYear} </span> 
            <span>{CONSTANTS.ENTERPRISE_NAME}. </span>
            <span>{CONSTANTS.COPYRIGHT}</span>
        </p> 
        <svg xmlns="http://www.w3.org/2000/svg" width="111" height="25" viewBox="0 0 111 34"><text transform="translate(0 29)" fill="#fff" fontSize="31" fontFamily="GothamBold"><tspan x="0" y="0">Isotipo</tspan></text></svg>
    </footer>
}