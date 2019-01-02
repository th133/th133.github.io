
let themes = 
  { 
    "BW" : ["#212121", "#f2f2f2", "#c45252"], 
    "WB" : ["#f2f2f2", "#212121", "#c45252"],
    "RW" : ["#c45252", "#f2f2f2", "#212121"], 
    "BY" : ["#95aae5", "#f2f2f2", "#e2e868"]
  };


function ChangeColorView (props) {

  var style = {
    backgroundColor : themes[props.paletteName][0],
  };

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
    <div className="ColorPalettesView">
      {
        Object.keys(themes).map((paletteName) => {
        if(paletteName === props.curTheme) return;
        return <ChangeColorView paletteName = {paletteName} 
                                changeTheme = {props.changeTheme}/>
        })
      }
    </div>
  );
}