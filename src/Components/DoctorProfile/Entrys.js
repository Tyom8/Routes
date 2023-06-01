function Entry(props) {
    const {text , src , bigText} = props;
    return (
        <div className="entryDiv">
            <div className="entry">
                <img className="cal" src={src} alt=""></img>
                <h2>{bigText}</h2>
            </div>
            <div><p className="dataText">{text}</p></div>
        </div>
    )
};

export default Entry;