import React from "react"
import RadialGrid from '../components/radial-grid.js'

function toRadians(angle) {
  return angle * (Math.PI / 180) 
}

function evenGrid(cx, cy, rings, area, divisor) {
  let output = [];
  let last = {};
  let radialStart = {};
  let radialEnd = {};

  for (var i = 1; i <= rings + 1; i++) {
    let offset = last.a ? last.a : 0;
    let r = Math.sqrt(((area * divisor(i) + offset)) / Math.PI);
    let a = Math.PI * Math.pow(r, 2);

    //console.log({r: r});
    if (r > 0) {
      // output.push(
      //   <RadialGrid
      //     cx={ cx } 
      //     cy={ cy } 
      //     minR={ last.r ? last.r : 0 }
      //     r={ r }
      //     radialSubdivisions={ divisor(i) }
      //     stroke="black"
      //     stroke-width={ 1 }
      //   />
      // )
      let minR = last.r ? last.r : 0;
      let subdivisions = divisor(i);
      let n = 0;
      while(n <= subdivisions) {
        let aMinR = minR ? minR : 0;
        let pos = n * (Math.PI * 2) / subdivisions;
        if (pos > Math.PI > Math.PI) {
          continue;
        }
        let startX = Math.cos(pos) * aMinR + cx;
        let startY = Math.sin(pos) * aMinR + cy;
        let endX = Math.cos(pos) * r + cx;
        let endY = Math.sin(pos) * r + cy;
        if (!radialStart[pos]) {
          radialStart[pos] = [startX, startY];
        }
        if (i > rings) {
          radialEnd[pos] = [endX, endY];
        }
        // output.push(
        //   <>
        //     <line
        //       vectorEffect="non-scaling-stroke"
        //       x1={startX}
        //       y1={startY}
        //       x2={endX}
        //       y2={endY}
        //       stroke="red"
        //       strokeWidth={ .5 }
        //     />
        //   </>
        // );
        n++;
      }
      output.push(
        <circle
          vectorEffect="non-scaling-stroke"
          fill="none"
          r={ r }
          cx={ cx }
          cy={ cy }
          stroke="black"
          stroke-width={ .5 }
        />
      )
    }
    last.r = r;
    last.a = a;
  }

  for (let key in radialEnd) {
    output.push(
      <>
        <line
          vectorEffect="non-scaling-stroke"
          x1={radialStart[key][0]}
          y1={radialStart[key][1]}
          x2={radialEnd[key][0]}
          y2={radialEnd[key][1]}
          stroke="black"
          strokeWidth={ .5 }
        />
      </>
    );
  }
  return output;
}

let odd = evenGrid(0, 0, 10000, 200, function(n) {
  let i = 0;
  let k = 1;  

  while (i < n) {  
    i = i + k;  
    k = k * 2;  
  }  
  return (k * 6);  
});


const testPage = () => (
  <>
    <svg height="50000" width="1000" viewBox="-500 0 1000 50000">
      { odd }
      <text x="0" y="26092.5">Sol</text>
    </svg>
  </>
)

export default testPage