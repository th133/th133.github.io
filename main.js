class AppDecider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width : 0, height : 0, isMobile : false, theme : "WB"};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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

