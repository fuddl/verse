import React from "react"

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      height: this.props.height,
      xOffset: 0,
      yOffset: 0,
      dragging: false,
      zoom: this.props.zoom,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  mouseUpHandle(e) {
    if (this.state.dragging) {
      this.setState(Object.assign(this.state, {dragging: false}));
    }
  }

  mouseDownHandle(e) {
    if (!this.state.dragging) {
      this.setState(Object.assign(this.state, {dragging: true}));
      this.lastClientX = e.clientX;
      this.lastClientY = e.clientY;
      e.preventDefault();
    }
  }

  mouseMoveHandle(e) {
    if (this.state.dragging) {
      this.setState({
        xOffset: this.state.xOffset - (-this.lastClientX + (this.lastClientX = e.clientX)),
        yOffset: this.state.yOffset - (-this.lastClientY + (this.lastClientY = e.clientY)),
      });
    }
  }

  handleZoom(e) {
    this.setState({ zoom: (this.state.zoom + e.deltaY / 1000)});
  }

  render() {
    const w = this.state.width;
    const h = this.state.height;
    const z = Math.abs(this.state.zoom);
    const xo = this.state.xOffset;
    const yo = this.state.yOffset;
    const vb = [
      xo / z,
      yo / z,
      w / z,
      h / z,
    ]

    let background = (
      <>
        <rect 
          x={ xo / z }
          y={ yo / z }
          width={ w / z }
          height={ h / z }
          fill="black"
        />
      </>
    );

    return (
      <svg
        width={ w }
        height={ h }
        viewBox={ vb.join(' ') }
        onMouseUp={ this.mouseUpHandle.bind(this) }
        onMouseDown={ this.mouseDownHandle.bind(this) }
        onMouseMove={ this.mouseMoveHandle.bind(this) }
        onWheel = { this.handleZoom.bind(this) }
        className={ this.state.dragging ? 'dragging' : 'draggable' }
        data-zoom={ z }
       >
        { background }
        <ause href="#grid" x="0" y="0" height="100" width="140"/>
        <use href="#slots" x="0" y="0" height="11189mm" width="11189mm"/>
      </svg>
    )
  }
}

export default Map