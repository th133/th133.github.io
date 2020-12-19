const links = {
    "resume": "https://docs.google.com/document/d/e/2PACX-1vTgECOhsQwGmPjWnSaJDvr5wQ0014pjiEtYx_YxH3PtB9oA0EZbnLeubPme0k6-EzAC8VhJToafvQ4W/pub",
    "github": "https://github.com/th133",
    "linkedin": "https://www.linkedin.com/in/taehyun-lee-uw/",
    "mail": "mailto:t73lee@edu.uwaterloo.ca"
}

const about_me = "I am a 4th year CS student at the University of Waterloo."

const projects = [
    {
      "project"        : "append-markdown",
      "project_detail" : "A program intended to make keeping track of markdown notes easier.",
      "url"            : "https://github.com/th133/append-markdown"
    },
    {
      "project"        : "factor+",
      "project_detail" : "A math game but with a parabolic twist.",
      "url"            : "https://github.com/lyoon1/FactorPlus-Ver.-2"
    },
    {
      "project"        : "community-bot",
      "project_detail" : "A Discord bot that tries to bring community essential functions to Discord, such as creating events.",
      "url"            : "https://github.com/th133/community-bot"
    },
    {
      "project"        : "orbit",
      "project_detail" : "A library that takes insperation from orbiting stars to show requested content.",
      "url"            : "https://github.com/th133/orbit"
    },
  ];

const colors = {
    white : "#f2f2f2",
    black : "#212121",
    red   : "#e86363",
    blue  : "#95aae5",
    yellow: "#e2e868"
};

const themes = { 
    "BW" : [colors.black, colors.white, colors.red], 
    "WB" : [colors.white, colors.black, colors.red],
    "RW" : [colors.red, colors.white, colors.black], 
    "BY" : [colors.blue, colors.white, colors.yellow]
};

const default_theme = "WB"