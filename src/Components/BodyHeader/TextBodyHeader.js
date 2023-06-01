import Button from "./Bottons";
import FirstText from "./FirstText";
import SecondText from "./SecondText";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

function Texts() {
    const t = useContext(LanguageContext).t;
    return (
        <div className="Texts">
            <FirstText/>
            <SecondText/>
            <div className="duble-Button">
            <Button className="White-Button" text={t.bodyHeader.button1}/>
            <Button className="Aqua-Button" text={t.bodyHeader.button2}/>
            </div>
        </div>
    )
}

export default Texts;