class AppDecider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width : 0, height : 0, isMobile : false};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
      this.state.isMobile ? <MobileApp /> : <DesktopApp />
    )
  }
}

ReactDOM.render(<AppDecider />, document.getElementById('root'));

