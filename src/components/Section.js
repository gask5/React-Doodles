function Section(props){
      const background = props.background;
      return (
            <div style={{
                        background: background,
                        width: '100vw',
                        marginTop: '-1rem'
                  }}>{props.content}</div>
      );
}

export default Section;