let colors = {
  white : "#f2f2f2",
  black : "#212121",
  red   : "#e86363",
  blue  : "#95aae5",
  yellow: "#e2e868"
};

let themes = 
  { 
    "BW" : [colors.black, colors.white, colors.red], 
    "WB" : [colors.white, colors.black, colors.red],
    "RW" : [colors.red, colors.white, colors.black], 
    "BY" : [colors.blue, colors.white, colors.yellow]
  };


function ChangeColorView (props) {
  var style = props.changeColStyle;
  style["backgroundColor"] = themes[props.paletteName][0];

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

function ColorPalettesView (props) {
  
  return (
    <div className="ColorPalettesView" style={props.paletteStyle}>
      {
        Object.keys(themes).map((paletteName) => {
        if(paletteName === props.curTheme) return;
        return <ChangeColorView changeColStyle = {props.changeColStyle}
                                paletteName = {paletteName} 
                                changeTheme = {props.changeTheme}/>
        })
      }
    </div>
  );
}