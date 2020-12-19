function ChangeColorView (props) {
  var style = props.changeColStyle;
  style.backgroundColor = props.palette.primary;

  return (
    <a  id="changecolor" 
        style={style}
        onClick={(e) => {
        e.preventDefault();
        props.changeTheme(props.palette);
      }
    }/>
  );
}

function currentTheme() {
  let curTheme = 
    themes.find(
      theme => getComputedStyle(document.documentElement).getPropertyValue('--background-color').includes(theme.primary)
    )

  return curTheme != undefined ? curTheme : default_theme;
}

class ColorPalettesView extends React.Component {
  constructor(props){
    super(props)
    this.state = { theme : currentTheme()};
    this.changeTheme = this.changeTheme.bind(this);
    this.changeTheme(this.state.theme);
  }

  changeTheme (palette) {
    if(palette.name === this.state.theme) return;

    let root = document.documentElement;

    root.style.setProperty("--background-color", palette.primary);
    root.style.setProperty("--font-color", palette.secondary);
    root.style.setProperty("--highlight-color", palette.highlight);

    this.setState({ theme : palette });
  }

  render() {
    return (
      <div className="ColorPalettesView" style={this.props.paletteStyle}>
        {
          themes.map((theme) => {
            if(theme == this.state.theme) return;
            return <ChangeColorView changeColStyle = {this.props.changeColStyle}
                                    palette = {theme} 
                                    changeTheme = {this.changeTheme}/>
          })
        }
      </div>
    );
  }
}