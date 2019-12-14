import React from "react"

class card extends React.Component {
  render() {
    const width = 63;
    const height = 89;

    return (
      <g transform={ this.props.transform }>
        <rect
          x={ (this.props.x - width/2) }
          y={ (this.props.y - height/2) }
          width={ width }
          height={ height }
          fill="none"
          stroke={ this.props.color }
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          rx="5"
          ry="5"
        />
        <stext fill={ this.props.color } x="3" y="85" fontSize="12">{ this.props.text }</stext>
      </g>
    )
  }
}

export default card