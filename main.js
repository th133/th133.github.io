class AppDecider extends React.Component {
  constructor(props) {
    super(props);
    var theme = Cookies.get("theme");
    theme = theme == undefined ? "WB" : theme;

    this.state = { width : 0, height : 0, isMobile : false, theme : theme};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.changeTheme   = this.changeTheme.bind(this);
    this.changeTheme(this.state.theme);
  }

  changeTheme (paletteName) {

    let root = document.documentElement;
    let [primCol, secCol, highCol] = themes[paletteName];

    root.style.setProperty("--background-color", primCol);
    root.style.setProperty("--font-color", secCol);
    root.style.setProperty("--highlight-color", highCol);
    Cookies.set("theme", paletteName)

    this.setState({ theme : paletteName });
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight,
      isMobile: window.innerWidth < window.innerHeight
    });
  }

  render(){
    return (
      this.state.isMobile ? 
      <MobileApp changeTheme={this.changeTheme} theme={this.state.theme}/> : 
      <DesktopApp changeTheme={this.changeTheme} theme={this.state.theme}/>
    )
  }
}

ReactDOM.render(<AppDecider />, document.getElementById('root'));

