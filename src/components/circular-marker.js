import React from "react"

class marker extends React.Component {
  s4() { 
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  } 

  guid2() { 
    return 'circle-' + this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  copyAttributes(attributes) {
    return JSON.parse(JSON.stringify(attributes))
  }

  circle(attributes) {
    var start = attributes.start;
    var cx = attributes.cx;
    var cy = attributes.cy;
    var r = attributes.r;
    var d = [];
    var startX = Math.cos(start+Math.PI)*r + cx;
    var startY = Math.sin(start+Math.PI)*r + cy;
    var middleX = Math.cos(start)*r + cx;
    var middleY = Math.sin(start)*r + cy;

    d.push("M" + startX + "," + startY);
    d.push("A" + r + "," + r + " 0 1,0 " +  middleX + "," + middleY); // draw half a circle clockwise
    d.push("A" + r + "," + r + " 0 1,0 " +  startX + "," + startY);  // draw another half clockwise
    d = d.join(' ');
   return (
     <path d={ d } fill="none" id={ attributes.id } />
   );
  }

  render() {
    let attributes = this.copyAttributes(this.props);

    var cx = attributes['cx'];
    var cy = attributes['cy'];
    var x = attributes['x'];
    var y = attributes['y'];
    let image = null;
    var r = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
    if (attributes.href) {
      let size = attributes.size ? attributes.size : 1;
      image = (
        <>
          <circle cx={ cx } cy={ cy } r={ r } fill="none" stroke="white" strokeWidth={ .1 } opacity={ .1 } />
          <image
            href={ attributes.href }
            x={ x-(size/2) }
            y={ y-(size/2) } 
            height={ size }
            width={ size}
          />
        </>
      );
    }
    var id = this.guid2();
    var theta = Math.acos((cx - x)/r);
    var A = 0;
    if (y < cy) {
      A = Math.PI + theta;
    } else {
      A = Math.PI - theta;
    } 
    var Offset = (A*r) + 1;
    let fSize = attributes['font-size'] ? attributes['font-size'] : .5;
    let dOffset = attributes.href ? 1 : fSize/2 ;
    let tclass = fSize > 1.4 ? 'circular-marker__text--big' : ''; 

    if (attributes.subtitle) {
      var subtitle = (
        <text
          fontSize={ fSize/2 }
          text-anchor="middle">
          <textPath
            href={ '#' + id }
            startOffset="50%"
          >
            <tspan
              dy={ dOffset+(fSize/1.5) } 
              style={ attributes.style }
              fill={ attributes.fill }
            >
              { attributes.subtitle }
            </tspan>
          </textPath>
        </text>
      );
    }

    
    var circle = this.circle({
      cx: cx,
      cy: cy,
      r: r,
      fill: "none",
      stroke: "none",
      id: id,
      start: A
    });

    return (
      <g>
        { image }
        { circle }
        <text
          fontSize={ fSize }
          textAnchor="middle"
          class={ tclass }
        > 
          <textPath
            href={ '#' + id }
            startOffset="50%"
          >
            <tspan
              dy={ dOffset }
              style={ attributes.style }
              fill= { attributes.fill }
            >
              { attributes.title }
            </tspan>
          </textPath>
        </text>
        { subtitle }
      </g>
    );
  }
}

export default marker

