
let themes = 
  { 
    "BW" : ["black", "white", "red"], 
    "WB" : ["white", "black", "red"],
    "RW" : ["red", "white", "black"], 
    "BY" : ["blue", "white", "yellow"]
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