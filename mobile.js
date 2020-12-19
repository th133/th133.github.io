function MobileNavView (props) {
  var innerNavViewStyle = {
    textAlign : "center"
  };

  var h1Style = {
    fontSize : "10vw",
  };

  var h2Style = {
    display  : "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize : "8vw",
    marginBottom : "2vw",
    marginRight : "2vw",
    marginTop : "1vw"
  };

  var contactsStyle = {
    marginRight: "2vw"
  };

  var resumeStyle = {
    padding: "0.69vw",
    fontSize: "4.3vw",
    marginRight: "2vw",
    borderRadius: "1vw"
  };

  var pStyle = {
    fontSize : "3vw"
  };

  return (
    <div className="NavView" style={props.navViewStyle}>
      <div className="InnerNavView" style={innerNavViewStyle}>
        <h1 style={h1Style}>TAEHYUN_LEE</h1>
        <h2 id="contacts" style={h2Style}>
          <a id="resume_link" href={links.resume} style={resumeStyle}>Resume</a>
          <a href={links.github} ><i className="fab fa-github-square"></i></a>
          <a href={links.linkedin} ><i className="fab fa-linkedin"></i></a>
          <a href={links.mail} ><i className="fas fa-envelope-square"></i></a>
        </h2>

        <code style={pStyle}>{about_me}</code>
      </div>
    </div>
  );
}

class MobileApp extends React.Component {
  render() {
    var mobileContainingViewStyle = {
      "width" : "100%",
      "marginLeft" : "0%"
    };

    var mobilePaletteContainingViewStyle = {
      position : "absolute",
      top      : "85%",
      display  : "flex",
      alignItems: "center",
      justifyContent: "center"
    };

    var mobilePaletteStyle = {
      
    };

    var mobileChangeColStyle = {
      width: "6vw",
      height: "6vw",
      margin: "2vw"
    };
    
    var mobileNavViewStyle = {
      width: "100%"
    };

    return (
      <div className="ContainingView" style={mobileContainingViewStyle}>
        <div className="MobilePaletteContainingView" style={mobilePaletteContainingViewStyle}>
          <ColorPalettesView paletteStyle   = {mobilePaletteStyle}
                            changeColStyle = {mobileChangeColStyle}/> 
        </div>
        <MobileNavView navViewStyle  = {mobileNavViewStyle}/>
      </div>
    );
  }
}