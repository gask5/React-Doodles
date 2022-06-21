const headerStyle = {
    color:' rgb(255,86,120)',
    fontSize: '2rem',
};

const imgStyle = {
    maxWidth: "25rem",
    maxHeight: "40rem",
    borderRadius: "0.5rem",
    objectFit: "cover",
};

const paragraphStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "1rem",
    borderRadius: "1em",
    padding: '5vw',
};

const textStyle = {
    textAlign: "left",
    maxWidth: "25rem",
    margin: "2.5rem",
};

function Paragraph(props) {
    let header;
    if (props.header1 != null)
        header = <h1 style={headerStyle}>{props.header1}</h1>;
    else if (props.header2 != null)
        header = <h2 style={headerStyle}>{props.header2}</h2>;
    else if (props.header3 != null)
        header = <h3 style={headerStyle}>{props.header3}</h3>;

    if (props.direction === "reverse")
    return (
        <div style={paragraphStyle}>
                <img style={imgStyle} src={props.img}></img><div style={textStyle}>{props.content}</div>
        </div>
    );

    else return (
        <div style={paragraphStyle}>
            <div style={textStyle}>{props.content}</div><img style={imgStyle} src={props.img}></img>
        </div>
    );
}

export default Paragraph;
