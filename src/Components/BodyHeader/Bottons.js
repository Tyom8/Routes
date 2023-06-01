import { Link } from "react-router-dom";
function Button(props) {
    const {className,text,to,doctorId} = props;
    return (
              <Link to={to+doctorId}><button className={className}>{text}</button></Link>
    )
}

export default Button;