import React from "react"

class asteroids extends React.Component {
  toRadians(angle) {
    return angle * (Math.PI / 180)
  }

  copyAttributes(attributes) {
    return JSON.parse(JSON.stringify(attributes))
  }

  randn_bm(a,t,r) {
    for(var n=0,o=0;0===n;)n=Math.random();for(;0===o;)o=Math.random();let h=Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*o);return((h=h/10+.5)>1||h<0)&&(h=this.randn_bm(a,t,r)),h=Math.pow(h,r),h*=t-a,h+=a
  }

  render() {
    let attributes = this.copyAttributes(this.props);
    let r = attributes.r;
    let spread = attributes.spread;
    let particles = attributes.particles;
    var n = 0;
    var a = 360 / particles;
    let asteroids = [];
    while (n < particles) {
      let rr = this.randn_bm(r-spread, r+spread, 1)
      var x = Math.cos(this.toRadians(a*n)) * rr + attributes.cx;
      var y = Math.sin(this.toRadians(a*n)) * rr + attributes.cy;
      asteroids.push(
        <image
          x={ x }
          y={ y }
          href="assets/rocks/a_0.png"
          height={ Math.random()*.2 }
          width={ .2 }
          fill="white"
          transform={ "rotate(" + (Math.random()*360) + " ," + x + "," + y + ")" } 
        />
      );
      n++;
    }

    return (
      <g>
        { asteroids }
      </g>
    );
  }
}

export default asteroids

