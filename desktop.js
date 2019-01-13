let projects = [
  {
    "project"        : "append-markdown",
    "project_detail" : "A program intended to make keeping track of markdown notes easier.",
    "url"            : "https://github.com/Taehyun-Lee/append-markdown"
  },
  {
    "project"        : "factor+",
    "project_detail" : "A math game but with a parabolic twist.",
    "url"            : "https://github.com/lyoon1/FactorPlus-Ver.-2"
  },
  {
    "project"        : "community-bot",
    "project_detail" : "A Discord bot that tries to bring community essential functions to Discord, such as creating events.",
    "url"            : "https://github.com/Taehyun-Lee/community-bot"
  },
  {
    "project"        : "orbit",
    "project_detail" : "A library that takes insperation from orbiting stars to show requested content.",
    "url"            : "https://github.com/Taehyun-Lee/orbit"
  },
];


let types = Object.freeze({ "About" : 1, "Projects" : 2, "Contacts" : 3});

function ContactsView (props) {
  return (
    <div className="ContactsView">
      <h1>
      <a href="https://github.com/Taehyun-Lee"><i className="fab fa-github-square"></i></a>
      <a href="https://www.linkedin.com/in/taehyun-lee-uow/"><i className="fab fa-linkedin"></i></a>
      <a href="mailto:t73lee@edu.uwaterloo.ca"><i className="fas fa-envelope-square"></i></a>
      </h1>
    </div>
  );
}

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
      <p>I am a 3rd year CS student at the University of Waterloo.</p>
    </div>
  );
}

function ContentView (props) {
  var currentView = <AboutView />;
  if(props.current == types.Projects) {
    currentView = <ProjectsView />;
  } else if (props.current == types.Contacts) {
    currentView = <ContactsView />;
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
          <a id="resume_link" href="personal_resume.pdf" >Resume</a>
          <a href="https://github.com/Taehyun-Lee"><i className="fab fa-github-square"></i></a>
          <a href="https://www.linkedin.com/in/taehyun-lee-uow/"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:t73lee@edu.uwaterloo.ca"><i className="fas fa-envelope-square"></i></a>
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
                           changeColStyle = {desktopChangeColStyle}
                           changeTheme    = {this.props.changeTheme} 
                           curTheme       = {this.props.theme}/> 
        <DesktopNavView navViewStyle  = {desktopNavViewStyle}
                 current       = {this.state.current} 
                 changeCurrent = {this.changeCurrent} />
        <div className = "VerticalLine"/>
        <ContentView current = {this.state.current} />
      </div>
    );
  }
}
