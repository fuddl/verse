import React from "react"
import RadialGrid from '../components/radial-grid.js'

function evenGrid(cx, cy, rings, divisions, area) {
  let output = [];
  let last = {};


  for (var i = 1; i <= rings + 1; i++) {
    let offset = last.a ? last.a : 0;
    let r = Math.sqrt(((area * (i * divisions) + offset)) / Math.PI);
    let a = Math.PI * Math.pow(r, 2);

    console.log({r: r});
    if (r > 0) {
      output.push(
        <RadialGrid
          cx={ cx } 
          cy={ cy } 
          minR={ last.r ? last.r : 0 }
          r={ r }
          radialSubdivisions={ divisions * i }
          stroke="black"
          stroke-width={ 1 }
        />
      )
    }
    last.r = r;
    last.a = a;
  }
  return output;
}

let test = evenGrid(0, 0, 10, 1, 1);

console.log(test);

const testPage = () => (
  <>
    <link rel="stylesheet" href="map.css" />
    <svg height="1000" width="1000" viewBox="-10 -10 20 20">{ test }</svg>
  </>
)

export default testPage