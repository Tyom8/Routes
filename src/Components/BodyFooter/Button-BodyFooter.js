import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

function Button(props) {
    const t = useContext(LanguageContext).t;
    const [boolean,setBoolean] = useState(false);
    const {booleanFn} = props;
    booleanFn(boolean)
    return (
        <div className="Button-Div">
            <button className="butt" onClick={()=> {
                setBoolean(!boolean)
            }}>{t.bodyFooter.button}</button>
        </div>
    )
}

export default Button;