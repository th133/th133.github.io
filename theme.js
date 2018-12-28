
let themes = 
  { 
    "BW" : ["black", "white", "red"], 
    "WB" : ["white", "black", "red"],
    "RW" : ["red", "white", "black"], 
    "BY" : ["blue", "white", "yellow"]
  };


function ChangeColorView (props) {
  let [primCol, secCol, highCol] = themes[props.paletteName];

  var style = {
    backgroundColor : primCol,
  };

  var colorchange = <i className="fas fa-circle" ></i>;

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