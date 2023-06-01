import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

function Button() {
    const t = useContext(LanguageContext).t;
    const [boolean,setBoolean] = useState(true);
    return (
        <div>
            <a href="#" className={boolean ? "a" : "decor"} onMouseOver={()=> {
                setBoolean(false)
            }} onMouseOut={()=> {
                setBoolean(true)
            }}>{t.bodyBody.button}</a>
        </div>
    )
}

export default Button;