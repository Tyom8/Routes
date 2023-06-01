import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

function FirstText() {
    const t = useContext(LanguageContext).t;
    return (
        <div>
            <h1 className="h1Body">{t.bodyBody.firstText}</h1>
        </div>
    )
}

export default FirstText;