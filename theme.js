function ChangeColorView (props) {
  var style = props.changeColStyle;
  style.backgroundColor = themes[props.paletteName][0];

  return (
    <a  id="changecolor" 
        style={style}
        onClick={(e) => {
        e.preventDefault();
        props.changeTheme(props.paletteName);
      }
    }/>
  );
}


class ColorPalettesView extends React.Component {
  constructor(props){
    super(props)
    this.state = { theme : default_theme};
    this.changeTheme = this.changeTheme.bind(this);
    this.changeTheme(this.state.theme);
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
    return (
      <div className="ColorPalettesView" style={this.props.paletteStyle}>
        {
          Object.keys(themes).map((paletteName) => {
            if(paletteName === this.state.theme) return;
            return <ChangeColorView changeColStyle = {this.props.changeColStyle}
                                    paletteName = {paletteName} 
                                    changeTheme = {this.changeTheme}/>
          })
        }
      </div>
    );
  }
}