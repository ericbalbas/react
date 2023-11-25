import React from 'react'

const Position = (props) => {
    console.log(props)
    const hover = props.hover? 'hover:' : '';
    return React.createElement(
      "div",
      {
        id: "learn",
        className: `text-4xl text-center ${props.bg} ${hover}`,
      },
      React.createElement(
        "h3",
        { className: `animate-${props.animation}` },
        `I'm learning ${props.subject}${props.description}`
      )
    );
}
export default Position