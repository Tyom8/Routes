import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

function SecondText() {
    const t = useContext(LanguageContext).t;
    return (
        <div className="Second-Text">
            <span className="span">
                {t.bodyHeader.secondText.t1}<div className="u"><b className="b">{t.bodyHeader.secondText.t2}
                </b></div>{t.bodyHeader.secondText.t3}
                <div className="u"><b className="b">{t.bodyHeader.secondText.t4}</b></div>
                 <br />{t.bodyHeader.secondText.t5}<br />{t.bodyHeader.secondText.t6}
                <span className="aqua">{t.bodyHeader.secondText.t7}
                </span>{t.bodyHeader.secondText.t8}<span className="aqua">{t.bodyHeader.secondText.t9}</span>
            </span>
        </div>
    )
}

export default SecondText;