import IsoTipo from '../../assets/isotipo.svg'
import { CONSTANTS } from '../../constants'

export default function Footer(){
    const currentYear =  new Date().getFullYear()
    return <footer className="Footer">
        <img src={IsoTipo} alt="Isotipo footer image left" />
        <p className="copyright">©  
            <span data-testId="year-copyright"> {currentYear} </span> 
            <span>{CONSTANTS.ENTERPRISE_NAME}. </span>
            <span>{CONSTANTS.COPYRIGHT}</span>
        </p> 
        <img src={IsoTipo} alt="Isotipo footer image left" />
    </footer>
}