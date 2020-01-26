import React from "react"
import RadialGrid from '../components/radial-grid.js'

function evenGrid(cx, cy, rings, area, divisor) {
  let output = [];
  let last = {};


  for (var i = 1; i <= rings + 1; i++) {
    let offset = last.a ? last.a : 0;
    let r = Math.sqrt(((area * divisor(i) + offset)) / Math.PI);
    let a = Math.PI * Math.pow(r, 2);

    console.log({r: r});
    if (r > 0) {
      output.push(
        <RadialGrid
          cx={ cx } 
          cy={ cy } 
          minR={ last.r ? last.r : 0 }
          r={ r }
          radialSubdivisions={ divisor(i) }
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

let fibonacci = function(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

let fakultaet = function (n) {
  if (n <= 1) {
    return n;
  }
  return n * fakultaet( n - 1 );
}

function Prime(num) {
  let output = true  
  for (var i=2 ; i<num ; i++) { //var i=2
      if (num%i === 0)  {
         output = false ; break
      }
  }
  return output
}

let PrimeMover = function (num) {
  var count = 0
  for (var i=2 ; i<10000 ; i++)  { //var i=2
      if (Prime(i) === true) {
          count = count + 1 
      }
      if (count === num) {
          return i
          break
      } 
  }
}

let primeFibbonacci = function(num) {
  if (num === 0) return 1;
  if (num === 1) return 2;
  let count = 1;
  let lastPrime = 0;
  let prime = 1;
  while (count < num) {
    lastPrime = prime;
    prime = prime + 2;
    if (Prime(prime)) {
      count++;
    }
  }
  return prime + lastPrime;
}

let half = evenGrid(0, 0, 12, 1, function(i) { return 2 * i });
let third = evenGrid(0, 0, 11, 1, function(i) { return 3 * i });
let furth = evenGrid(0, 0, 8, 1, function(i) { return 4 * i });
let fith = evenGrid(0, 0, 8, 1, function(i) { return 5 * i });
let sixth = evenGrid(0, 0, 7, 1, function(i) { return 6 * i });
let eigth = evenGrid(0, 0, 6, 1, function(i) { return 8 * i });
let twelveth = evenGrid(0, 0, 4, 1, function(i) { return 12 * i });
let fib = evenGrid(0, 0, 10, 1, fibonacci);
let fak = evenGrid(0, 0, 4, 1, fakultaet);
let euler = evenGrid(0, 0, 10, 1, function(i) { return Math.round(Math.E * i); });
let prime = evenGrid(0, 0, 11, 1, PrimeMover);
let primefib = evenGrid(0, 0, 8, 1, primeFibbonacci);
let goldenfloor = evenGrid(0, 0, 12, 1, function(i) { return Math.floor(i * 1.61803398875) });
let goldenceil = evenGrid(0, 0, 12, 1, function(i) { return Math.ceil(i * 1.61803398875) });
let pifloor = evenGrid(0, 0, 9, 1, function(i) { return Math.floor(i * Math.PI) });
let piceil = evenGrid(0, 0, 9, 1, function(i) { return Math.ceil(i * Math.PI) });
let square = evenGrid(0, 0, 6, 1, function(i) { return Math.pow(i,2); });
let cubed = evenGrid(0, 0, 3, 1, function(i) { return Math.pow(i,3); });
let triangle = evenGrid(0, 0, 8, 1, function(i) { return (i * (i + 1)) / 2; });
let even = evenGrid(0, 0, 8, 1, function(n) {
  let i = 0;
  let k = 1;  

  while (i < n) {  
    i = i + k;  
    k = k * 2;  
  }  
  return (k * 6);  
});

let odd = evenGrid(0, 0, 13, 1, function(n) {
  let i = 0;
  let k = 1;  

  while (i < n) {  
    i = i + k;  
    k = k * 3;  
  }  
  return (k * 2) -3;  
});


const testPage = () => (
  <>
    <link rel="stylesheet" href="map.css" />
    <svg height="250" width="250" viewBox="-9 -9 18 18">{ half }</svg>
    <svg height="250" width="250" viewBox="-9 -9 18 18">{ third }</svg>
    <svg height="250" width="250" viewBox="-9 -9 18 18">{ furth }</svg>
    <svg height="250" width="250" viewBox="-9 -9 18 18">{ fith }</svg>
    <svg height="250" width="250" viewBox="-9 -9 18 18">{ sixth }</svg>
    <svg height="250" width="250" viewBox="-9 -9 18 18">{ eigth }</svg>
    <svg height="250" width="250" viewBox="-9 -9 18 18">{ twelveth }</svg>
    <svg height="250" width="250" viewBox="-9 -9 18 18">{ fib }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ fak }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ euler }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ prime }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ primefib }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ goldenfloor }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ goldenceil }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ pifloor }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ piceil }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ square }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ cubed }</svg>
    <svg height="250" width="250" viewBox="-8 -8 17 17">{ triangle }</svg>
    <svg height="250" width="250" viewBox="-12 -12 24 24">{ even }</svg>
    <svg height="250" width="250" viewBox="-15 -15 30 30">{ odd }</svg>
  </>
)

export default testPage