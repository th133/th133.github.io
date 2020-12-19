let types = Object.freeze({ "About" : 1, "Projects" : 2});


function ProjectView (props) {

  var style_attr = {
    backgroundImage: `url(${props.image})`
  };

  return (
    <div className="ProjectView" style={style_attr} >
      <h3><a href={props.url}><b>{props.project}</b><code>  </code><i className="fab fa-github-square"></i></a></h3>
      <p>{props.project_detail}</p>
    </div>
  );
}

function ProjectsView(props) {
  return (
    <div className="ProjectsView">
      <h2>Projects</h2>
      <div className="ProjectsContentsView">
        {projects.map((project, ind) =>
          <div className={"ProjectsBox" + (ind != 0 ? "" : " FirstElem")} key={project["project"]}>
            {ind != 0 && <div className="HorizontalLine" />}
            <ProjectView project={project["project"]}
                      project_detail={project["project_detail"]}
                      url={project["url"]} />
          </div>
        )}
      </div>
    </div>
  );
}

function AboutView(props){
  return (
    <div className="AboutView">
      <h2>About Me</h2>
      <p>{about_me}</p>
    </div>
  );
}

function ContentView (props) {
  var currentView = <AboutView />;
  if(props.current == types.Projects) {
    currentView = <ProjectsView />;
  }
  return (
    <div className="ContentView">
      <div className="InnerContentView">
        {currentView}
      </div>
    </div>
  );

}

function DesktopNavView (props) {
  function star(type){
    if(type == props.current){
      return <code>*</code>;
    } else {
      return <code> </code>;
    }
  }

  return (
    <div className="NavView" style={props.navViewStyle}>
      <div className="InnerNavView">
        <h1>TAEHYUN_LEE</h1>
        <h2 id="contacts">
          <a id="resume_link" href={links.resume} >Resume</a>
          <a href={links.github} ><i className="fab fa-github-square"></i></a>
          <a href={links.linkedin} ><i className="fab fa-linkedin"></i></a>
          <a href={links.mail} ><i className="fas fa-envelope-square"></i></a>
        </h2>
        
        <h3 onClick={(e) => props.changeCurrent(types.About)}   >[{star(types.About)}] About</h3>
        <h3 onClick={(e) => props.changeCurrent(types.Projects)}>[{star(types.Projects)}] Projects</h3>
      </div>
    </div>
  );
}


/**
 * Main react componenet, takes charge of which views to present
 * 
 */
class DesktopApp extends React.Component {
  constructor(props){
    super(props);
    this.state         = { current : types.About};
    this.changeCurrent = this.changeCurrent.bind(this);
  }

  changeCurrent (newCurrent) {
    this.setState({ current : newCurrent });
  }

  render() {
    var desktopPaletteStyle = {
      position : "absolute",
      top      : "5%",
      left     : "5%",
    };

    var desktopChangeColStyle = {
      width: "20px",
      height: "20px"
    };
    
    var desktopNavViewStyle = {
      width: "40%"
    };

    return (
      <div className="ContainingView">
        <ColorPalettesView paletteStyle   = {desktopPaletteStyle}
                           changeColStyle = {desktopChangeColStyle}/> 
        <DesktopNavView navViewStyle  = {desktopNavViewStyle}
                 current       = {this.state.current} 
                 changeCurrent = {this.changeCurrent} />
        <div className = "VerticalLine"/>
        <ContentView current = {this.state.current} />
      </div>
    );
  }
}
