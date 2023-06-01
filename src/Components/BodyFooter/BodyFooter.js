import { useState } from "react";
import "./BodyFooter.css";
import Button from "./Button-BodyFooter";
import Footer from "./Footer-BodyFooter";

function BodyFooter() {
    const [boolean,setBoolean] = useState("")
    let booleanFn = function (boolean) {
        return setBoolean(boolean)
    }
    return (
        <>
        <Button booleanFn={booleanFn}/>
        <Footer boolean={boolean}/>
        </>
    )
}

export default BodyFooter;