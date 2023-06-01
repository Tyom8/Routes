import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

function FirstText() {
    const t = useContext(LanguageContext).t;
    return (
        <div className="First-Text">
            <h1 className="h1">{t.bodyHeader.firstText1}</h1>
            <h1 className="h1-2">{t.bodyHeader.firstText2}</h1>
        </div>
    )
}

export default FirstText;