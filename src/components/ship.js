import React from "react"

class ship extends React.Component {
  render() {
    const width = 63;
    const height = 89;
    return (
      <g transform={ this.props.transform }>
        <path
          d={ 'M' + [this.props.x, this.props.y].join(' ') + 'm15 -64 h-142 v128 h254 v-115 h-98 z' }
          fill="red"
          stroke={ this.props.color }
          strokeWidth="1"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    )
  }
}

export default ship