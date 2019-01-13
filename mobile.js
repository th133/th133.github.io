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
    marginTop : "1vw"
  };

  var resumeStyle = {
    padding: "0.65vw",
    fontSize: "4.3vw",
  };

  var pStyle = {
    fontSize : "3vw"
  };

  return (
    <div className="NavView" style={props.navViewStyle}>
      <div className="InnerNavView" style={innerNavViewStyle}>
        <h1 style={h1Style}>TAEHYUN_LEE</h1>
        <h2 id="contacts" style={h2Style}>
          <a id="resume_link" href="personal_resume.pdf" style={resumeStyle}>Resume</a>
          <a href="https://github.com/Taehyun-Lee"><i className="fab fa-github-square"></i></a>
          <a href="https://www.linkedin.com/in/taehyun-lee-uow/"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:t73lee@edu.uwaterloo.ca"><i className="fas fa-envelope-square"></i></a>
        </h2>

        <code style={pStyle}>I am a 3rd year CS student at the <br/> University of Waterloo</code>
      </div>
    </div>
  );
}

class MobileApp extends React.Component {
  constructor(props){
    super(props);
    this.state         = { theme : "WB" };
    this.changeTheme   = this.changeTheme.bind(this);
  }

  changeTheme (paletteName) {
    if(paletteName === this.state.theme) return;

    let root = document.documentElement;
    let [primCol, secCol, highCol] = themes[paletteName];

    root.style.setProperty("--background-color", primCol);
    root.style.setProperty("--font-color", secCol);
    root.style.setProperty("--highlight-color", highCol);

    this.setState({ theme : paletteName });
  }

  render() {
    var mobileContainingViewStyle = {
      "width" : "100%",
      "marginLeft" : "0%"
    };

    var mobilePaletteContainingViewStyle = {
      position : "absolute",
      top      : "30%",
      display  : "flex",
      alignItems: "center",
      justifyContent: "center"
    };

    var mobilePaletteStyle = {
      
    };

    var mobileChangeColStyle = {
      width: "5vw",
      height: "5vw"
    };
    
    var mobileNavViewStyle = {
      width: "100%"
    };

    return (
      <div className="ContainingView" style={mobileContainingViewStyle}>
        <div className="MobilePaletteContainingView" style={mobilePaletteContainingViewStyle}>
          <ColorPalettesView paletteStyle   = {mobilePaletteStyle}
                            changeColStyle = {mobileChangeColStyle}
                            changeTheme    = {this.props.changeTheme} 
                            curTheme       = {this.props.theme}/> 
        </div>
        <MobileNavView navViewStyle  = {mobileNavViewStyle}/>
      </div>
    );
  }
}