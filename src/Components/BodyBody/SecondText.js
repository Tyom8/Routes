import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

function SecondText() {
    const t = useContext(LanguageContext).t;
    return (
        <>
            <div className="SecondText">
                <span className="span">{t.bodyBody.secondText1}</span>
            </div>
            <div className="ulDivs">
            <div className="ulDiv">
                <ul>
                    <li className="li"></li>
                    <li className="li"></li>
                    <li className="li"></li>
                </ul>
            </div>
            <div className="spanDiv">
                <span className="span">{t.bodyBody.secondText2}</span>
                <span className="span">{t.bodyBody.secondText3}</span>
                <span className="span">{t.bodyBody.secondText4}</span>
            </div>
            </div>
        </>
    )
}

export default SecondText;