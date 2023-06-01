function DoctorsHeaderComponents(props) {
    const {text} = props;
    const {src} = props;
    const {className} = props;
    return (
        <div className={className}>
        <img className="calendar" src={src} alt=""></img>
        <span>{text}</span>
    </div>
    )
}

export default DoctorsHeaderComponents;