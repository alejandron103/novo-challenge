import { CONSTANTS } from "../../constants";

export default function(){
    return <div className="UserMenu">
        <span className="UserMenu__name">{CONSTANTS.USER_NAME}</span>
        <span className="material-symbols-outlined UserMenu__icon">
            expand_more
        </span>
    </div>

}