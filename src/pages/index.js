import React from "react"
import RadialGrid from '../components/radial-grid.js'
import CircularMarker from '../components/circular-marker.js'
import AsteroidBelt from '../components/asteroids.js'
import ScrapBelt from '../components/asteroids.js'
import Slot from '../components/card.js'
import Ship from '../components/ship.js'
import Map from "../components/map"

let c = {
  x: 50,
  y: 50,
}

let pc = {
  x: 750,
  y: 750,
}

const pi = Math.PI;

function place(dist, a, center) {
  let ce = center ? center : c;
  return {
    x: Math.cos(a)*dist + ce.x,
    y: Math.sin(a)*dist + ce.y
  }
}

function radToDec(rad) {
  return rad / .0174533;
}

let slots = [];
let slotNr = 52; 
let slotArc = pi*2/slotNr;

for (let j = 0; j < slotNr; j++) {
  let slotloc = place(620, slotArc*j, pc);
  let transform = 'rotate(' + (radToDec(slotArc*j)-90) + ' ' + slotloc.x + ' ' + slotloc.y + ')';
  slots.push(<Slot transform={ transform } x={ slotloc.x } y={ slotloc.y } color={ 'white' } text={ "Crew" } />)
}

let qin = place(12, pi*.47);
let santo = place(2, pi*1.5, qin);

let qinShiHuang = (
  <g id="qin-shi-huang">
    <circle
      fill="black"
      cx={ qin.x }
      cy={ qin.y }
      r="3.25"
      stroke="SteelBlue"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    />
    <CircularMarker
      title="Santo"
      cx={ qin.x }
      cy={ qin.y }
      x={ santo.x }
      y={ santo.y }
      style={ { textTransform: 'uppercase' } }
      fill="white"
      href="assets/planet15/planet_38.png"
    />
    <CircularMarker
      title="秦始皇"
      subtitle="Qin Shi Huang"
      cx={ c.x }
      cy={ c.y }
      x={ qin.x }
      y={ qin.y }
      style={ { textTransform: 'uppercase' } }
      font-size="0.7"
      fill="white"
      href="assets/main_sequence_high_resolution/star_yellow02.png"
      size="1.5"
    />
  </g>
);

let relay7 = place(36, 2.75);
let rimLabel = place(43, pi/2);

let rim = (
  <g id="rim">
    <AsteroidBelt cx={ 50 } cy={ 50 } particles={ 2000 } spread={ 10 } r={ 54 } />
    <RadialGrid cx={ 50 } cy={ 50 } minR={ 48 } r={ 60 } radialSubdivisions={ 32 }  minArc={ 5.625 } stroke="DarkSlateGrey" stroke-width=".1" concentricSubdivisions={ 1 } />
    <RadialGrid
      cx={ c.x } 
      cy={ c.y } 
      minR={ 32 }
      r={ 48 }
      minArc={ 5.625 }
      radialSubdivisions={ 32 }
      stroke="red"
      stroke-width={ .1 }
      concentricSubdivisions={ 1 }
    />
    <CircularMarker
      cx={ c.x }
      cy={ c.y }
      x={ relay7.x }
      y={ relay7.y }
      style={ { textTransform: "uppercase" } }
      fill="white"
      title="Cortex Relay 7"
      href="assets/planets16_high_resolution/planet22.png" title="Cortex Relay 7"/>
    <CircularMarker
      cx={ c.x }
      cy={ c.y }
      x={ rimLabel.x }
      y={ rimLabel.y }
      style={ {
        textTransform: 'uppercase',
        fontWeight: 100 
      } }
      fill="red"
      font-size={ 2 } 
      title="Rim Space"
      subtitle="轮缘" 
    />
  </g>
);

let haloLabels = {
  north: place(17, pi*1.22),
  south: place(17, pi/2.9),
}

let halo = (
  <g id="halo">
    <AsteroidBelt cx={ c.x } cy={ c.y } particles={ 200 } spread={ 1.2 } r={ 17 }></AsteroidBelt>
    <CircularMarker cx={ c.x } cy={ c.y } x={ haloLabels.north.x } y={ haloLabels.north.y } style={ { textTransform: 'uppercase' } } fill="silver" font-size="0.35" title="The Halo"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ haloLabels.south.x } y={ haloLabels.south.y } style={ { textTransform: 'uppercase' } } fill="silver" font-size="0.35" title="The Halo"/>
  </g>        
)

let border = (
  <g id="border-space">
    <RadialGrid cx={ c.x } cy={ c.y } minR={ 16 } r={ 32 } radialSubdivisions={ 32 } stroke="orange" stroke-width="0.1" concentricSubdivisions={ 1 }></RadialGrid>
    <CircularMarker cx={ c.x } cy={ c.y } x={ 50 } y={ 24 } style={ { fontWeight: 100, textTransform: 'uppercase' } } fill="orange" font-size="2" subtitle="边境空间" title="Border Space"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ 44.7 } y={ 73.1 } style={ { textTransform: 'uppercase', fontWeight: '100' } } fill="orange" font-size="2" subtitle="边境空间" title="Border Space"/>
  </g>
);

let osiris = place(9.2, pi*.75);
let londinium = place(3, pi*.35);
let shinon = place(6.2, pi*1.95)
let bernadette = place(3.2, pi*1.45);
let liannJuin = place(6, pi*.55);
let bellerophon = place(10, pi*1.25);
let ariel = place(14.5, pi*.25);
let valentine = place(13.4, pi*1.12);
let lux = place(14, pi*1.5);
let persephone = place(2.7, pi*1.5, lux);
let pelorum = place(2.1, pi*.25, lux);

let whiteSun = (
  <g id="white-sun">
    <RadialGrid cx={ c.x } cy={ c.y } minR={ 2 } r={ 5 } radialSubdivisions={ 2 } concentricSubdivisions={ 0 } stroke="SteelBlue" stroke-width="0.1"></RadialGrid>
    <RadialGrid cx={ c.x } cy={ c.y } minArc={ 45 } minR={ 5 } r="8" radialSubdivisions={ 4 } stroke="SteelBlue" stroke-width="0.1"></RadialGrid>
    <RadialGrid cx={ c.x } cy={ c.y } minArc={ 22.5 } minR={ 8 } r="12" radialSubdivisions={ 8 } stroke="SteelBlue" stroke-width="0.1"></RadialGrid>
    <RadialGrid cx={ c.x } cy={ c.y } minArc={ 11.25 } minR={ 12 } r="16" radialSubdivisions={ 16 } stroke="SteelBlue" stroke-width="0.1"></RadialGrid>
    
    <CircularMarker cx={ c.x } cy={ c.y } x={ osiris.x } y={ osiris.y } font-size="1" style={ { fontFamily: 'Sexsmith', textTransform: 'uppercase' } } fill="white" href="assets/planets16_high_resolution/planet22.png" subtitle="Shipworks" title="Osiris"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ londinium.x } y={ londinium.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planets16_high_resolution/planet22.png" title="Londinium"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ liannJuin.x } y={ liannJuin.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planets16_high_resolution/planet22.png" title="Liann Juin"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ bernadette.x } y={ bernadette.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_39.png" title="Bernadette"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ shinon.x } y={ shinon.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_39.png" title="Shinon"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ bellerophon.x } y={ bellerophon.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_39.png" title="Bellerophon"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ ariel.x } y={ ariel.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/hd-hq-2d-planets-hi-res/City1.png" title="Ariel"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ valentine.x } y={ valentine.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_39.png" title="Valentine"/>
    <CircularMarker cx={ 65 } cy={ 10 } x={ c.x } y={ c.y } style={ { textTransform: 'uppercase' } } fill="white" size="3" href="assets/main_sequence_high_resolution/star_white02.png" subtitle="西方白虎" title="White Sun"/>
    <g id="lux">
      <circle fill="black" cx={ lux.x } cy={ lux.y } r="4"></circle>
      <RadialGrid cx={ lux.x } cy={ lux.y } r="4" stroke="SteelBlue" stroke-width="0.1" radialSubdivisions={ 2 }></RadialGrid>
      <CircularMarker cx={ lux.x } cy={ lux.y } x={ persephone.x } y={ persephone.y } style={ { fontFamily: 'TallDeco', textTransform: 'uppercase' } } fill="white" href="assets/hd-hq-2d-planets-hi-res/Terran1.png" title="Persephone"/>
      <CircularMarker cx={ lux.x } cy={ lux.y } x={ pelorum.x } y={ pelorum.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Pelorum"/>
      <CircularMarker cx={ lux.x } cy={ lux.y } x={ 50 } y={ 36 } style={ { textTransform: 'uppercase' } } fill="white" size="2.5" href="assets/main_sequence_high_resolution/star_yellow04.png" title="Lux"/>
    </g>
    { qinShiHuang }
  </g>
);

let georgiaC = place(27.35, pi);
let ezra = place(3.4, pi*.15, georgiaC);
let regina = place(3, pi*1.05, georgiaC);
let athens = place(9, 0, georgiaC);
let newhope = place(10, pi*1.75, georgiaC);
let ithaca = place(5.8, pi*1.65, georgiaC);
let priam = place(6.3, pi*1.35, georgiaC);
let kerry = place(6.5, pi*.85, georgiaC);
let threeHills = place(10.5, pi*1, georgiaC);
let boros = place(6.2, pi*.5, georgiaC);

let georgia = (
  <g id="georgia">
    <circle fill="black" cx={ georgiaC.x } cy={ georgiaC.y } r="12" />
    <RadialGrid cx={ georgiaC.x } cy={ georgiaC.y } minR={ 2 } r="5" minArc={ 90 } radialSubdivisions={ 2 } stroke="orange" stroke-width="0.1"></RadialGrid>
    <RadialGrid cx={ georgiaC.x } cy={ georgiaC.y } minR={ 5 } r="8" minArc={ 45 } radialSubdivisions={ 4 } stroke="orange" stroke-width="0.1"></RadialGrid>
    <RadialGrid cx={ georgiaC.x } cy={ georgiaC.y } minR={ 8 } r="12" minArc={ 22.5 } radialSubdivisions={ 8 } stroke="orange" stroke-width="0.1"></RadialGrid>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ regina.x } y={ regina.y } style={ { fontFamily: 'Chi-Town', textTransform: 'lowercase' } } fill="white" href="assets/planet15/planet_41.png" title="Regina"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ athens.x } y={ athens.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_44.png" title="Athens"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ newhope.x } y={ newhope.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Newhope"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ ithaca.x } y={ ithaca.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_43.png" title="Ithaca"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ priam.x } y={ priam.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_46.png" title="Priam"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ kerry.x } y={ kerry.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_45.png" title="Kerry"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ threeHills.x } y={ threeHills.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_36.png" title="Three Hills"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ ezra.x } y={ ezra.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_35.png" title="Ezra"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ boros.x } y={ boros.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_37.png" title="Boros"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ georgiaC.x } y={ georgiaC.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/main_sequence_high_resolution/star_yellow02.png" size="3" subtitle="黄龙" title="Georgia"/>
  </g>
);


const IndexPage = () => (
  <>
    <link rel="stylesheet" href="map.css" />
    <Map width="1000" height="1400" zoom={ .1 } />
    <svg hidden>
      <defs>
        <symbol id="grid" viewBox="0 -11 100 121">
          { rim }
          { halo }
          { border }
          { whiteSun }
          { georgia }
          <g id="murphy">
            <circle fill="black" cx={ 27 } cy={ 63 } r="3" stroke-width="0.1"></circle>
            <RadialGrid cx={ 27 } cy={ 63 } r="3" minArc={ 86.5 } radialSubdivisions={ 3 } stroke="orange" stroke-width="0.1"></RadialGrid>
            <CircularMarker cx={ 50 } cy={ 50 } x={ 27 } y={ 63 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/main_sequence_high_resolution/star_red03.png" size="3" title="Murphy"/>
            <CircularMarker cx={ 27 } cy={ 63 } x={ 25.4 } y={ 63.6 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Shadow"/>
            <CircularMarker cx={ 27 } cy={ 63 } x={ 28.5 } y={ 63.6 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Hera"/>
            <CircularMarker cx={ 27 } cy={ 63 } x={ 26.8 } y={ 61.15 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Aphrodite"/>
          </g>
          <g id="red-sun">
            <circle fill="black" cx={ 76 } cy={ 50 } r={ 12 } stroke-width={ .1 }></circle>
            <AsteroidBelt cx={ 76 } cy={ 50 } particles={ 500 } spread={ 1.2 } r={ 4.5 }></AsteroidBelt>
            <CircularMarker cx={ 76 } cy={ 50 } x={ 73 } y={ 53 } style={ { textTransform: 'uppercase' } } fill="silver" font-size="0.35" title="Motherlode"/>
            <RadialGrid cx={ 76 } cy={ 50 } minR={ 2 } r="5" minArc={ 90 } radialSubdivisions={ 2 } stroke="orange" stroke-width="0.1"></RadialGrid>
            <RadialGrid cx={ 76 } cy={ 50 } minR={ 5 } r="8" minArc={ 45 } radialSubdivisions={ 4 } stroke="orange" stroke-width="0.1"></RadialGrid>
            <RadialGrid cx={ 76 } cy={ 50 } minR={ 8 } r="12" minArc={ 22.5 } radialSubdivisions={ 8 } stroke="orange" stroke-width="0.1"></RadialGrid>
            <CircularMarker cx={ 76 } cy={ 50 } x={ 69 } y={ 43 } style={ { fontFamily: 'AnchorJack' } } fill="white" href="assets/planets16_high_resolution/planet22.png" subtitle="Space Bazaar" title="李申的市场" />
            <CircularMarker cx={ 50 } cy={ 50 } x={ 76 } y={ 50 } size="3" style={ { textTransform: 'uppercase' } } fill="white" href="assets/main_sequence_high_resolution/star_red04.png" subtitle="南方朱雀" title="Red Sun"/>
            <CircularMarker cx={ 76 } cy={ 50 } x={ 73 } y={ 50 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" subtitle="Jiangyn" title="江阴"/>
            <CircularMarker cx={ 76 } cy={ 50 } x={ 79.5 } y={ 50 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="New Melburne"/>
            <CircularMarker cx={ 76 } cy={ 50 } x={ 82 } y={ 52 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Harvest"/>
            <CircularMarker cx={ 76 } cy={ 50 } x={ 84 } y={ 56 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Anson's World"/>
            <CircularMarker cx={ 76 } cy={ 50 } x={ 74 } y={ 56 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="St. Albans"/>
            <CircularMarker cx={ 76 } cy={ 50 } x={ 70 } y={ 48 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Greenleaf"/>
            <CircularMarker cx={ 76 } cy={ 50 } x={ 83 } y={ 43 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Jubilee"/>
          </g>
          <g id="heinlein">
            <circle fill="black" cx={ 67.5 } cy={ 64 } r="5" stroke-width="0.1"></circle>
            <RadialGrid cx={ 67.5 } cy={ 64 } minR={ 2 } r="5" radialSubdivisions={ 2 } stroke="orange" stroke-width="0.1" minArc={ 36 }></RadialGrid>
            <CircularMarker cx={ 50 } cy={ 50 } x={ 67.5 } y={ 64 } size="1.6" style={ { textTransform: 'uppercase' } } fill="white" href="assets/main_sequence_high_resolution/star_red04.png" title="Heinlein"/>
            <CircularMarker cx={ 67.5 } cy={ 64 } x={ 69 } y={ 67 } style={ { fontFamily: 'Insane Rodeo', textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" subtitle="Amunitions" title="Silverhold"/>
            <CircularMarker cx={ 67.5 } cy={ 64 } x={ 67 } y={ 61 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Triumph"/>
          </g>
          <g id="himinbjoerg">
            <circle fill="black" cx={ 72 } cy={ 32 } r="5" stroke-width="0.1"></circle>
            <RadialGrid cx={ 72 } cy={ 32 } minR={ 2 } r="5" radialSubdivisions={ 2 } stroke="orange" stroke-width="0.1"></RadialGrid>
            <CircularMarker cx={ 50 } cy={ 50 } x={ 72 } y={ 32 } style={ { textTransform: 'uppercase' } } fill="white" font-size="0.7" size="2" href="assets/main_sequence_high_resolution/star_red01.png" title="Himinbjörg"/>
            <CircularMarker cx={ 72 } cy={ 32 } x={ 74.5 } y={ 34.5 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Aesir"/>
            <CircularMarker cx={ 72 } cy={ 32 } x={ 69.5 } y={ 29.2 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Brisengamen"/>
          </g>
          <g id="kalidasa">
            <circle fill="black" cx={ 65 } cy={ 10 } r="16" stroke-width="0.1"></circle>
            <RadialGrid cx={ 65 } cy={ 10 } minR={ 2 } r="5" minArc={ 115 } radialSubdivisions={ 2 } stroke="red" stroke-width="0.1"></RadialGrid>
            <RadialGrid cx={ 65 } cy={ 10 } minR={ 5 } r="8" minArc={ 70 } radialSubdivisions={ 4 } stroke="red" stroke-width="0.1"></RadialGrid>
            <RadialGrid cx={ 65 } cy={ 10 } minR={ 8 } r="12" minArc={ 92.5 } radialSubdivisions={ 8 } stroke="red" stroke-width="0.1"></RadialGrid>
            <RadialGrid cx={ 65 } cy={ 10 } minR={ 12 } r="16" minArc={ 100 } radialSubdivisions={ 16 } stroke="red" stroke-width="0.1"></RadialGrid>
            <CircularMarker cx={ 50 } cy={ 50 } x={ 65 } y={ 10 } style={ { textTransform: 'uppercase' } } fill="white" font-size="0.7" size="3" href="assets/main_sequence_high_resolution/star_yellow02.png" subtitle="玄武" title="Kalidasa"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 56 } y={ 20 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Zeus"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 60 } y={ 23 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Djinn's Bane"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 67 } y={ 20 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Zephyr"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 60 } y={ 18 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="New Kashmir"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 70.8 } y={ 13 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Constance"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 64 } y={ 6.46 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Verbana"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 68 } y={ 10 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Sho-Je Downs"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 61 } y={ 14 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Angel"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 61 } y={ 5 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Heaven"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 55 } y={ 11 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Whittier"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 51 } y={ 10 } style={ { textTransform: 'uppercase', fontFamily: 'Omnibus' } } fill="white" href="assets/planet15/planet_38.png" title="Beaumonde"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 56 } y={ 5 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Aberdeen"/>
            <CircularMarker cx={ 65 } cy={ 10 } x={ 54 } y={ 0.5 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Sailsburry"/>
          </g>
          <g id="penglai">
            <circle fill="black" cx={ 80 } cy={ 23 } r="5" stroke-width="0.1"></circle>
            <RadialGrid cx={ 80 } cy={ 23 } minR={ 2 } r="5" radialSubdivisions={ 2 } stroke="red" stroke-width="0.1"></RadialGrid>
            <CircularMarker cx={ 50 } cy={ 50 } x={ 80 } y={ 23 } style={ { textTransform: 'uppercase' } } fill="white" font-size="0.7" size="3" href="assets/main_sequence_high_resolution/star_yellow01.png" subtitle="蓬萊仙島" title="Penglai"/>
            <CircularMarker cx={ 80 } cy={ 23 } x={ 82.5 } y={ 25.5 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Newhall"/>
            <CircularMarker cx={ 80 } cy={ 23 } x={ 77.5 } y={ 20.2 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Belux"/>
          </g>
          <g id="blue-sun">
            <circle fill="black" cx={ 17 } cy={ 83 } r="12" stroke-width="0.1"></circle>
            <AsteroidBelt cx={ 17 } cy={ 83 } particles={ 500 } spread={ 1.2 } r={ 8.5 }></AsteroidBelt>
            <CircularMarker cx={ 17 } cy={ 83 } x={ 11 } y={ 89 } style={ { textTransform: 'uppercase' } } fill="silver" font-size="0.35" title="Uroborus Belt"/>
            <CircularMarker cx={ 17 } cy={ 83 } x={ 23 } y={ 77 } style={ { textTransform: 'uppercase' } } fill="silver" font-size="0.35" title="Uroborus Belt"/>
            <RadialGrid cx={ 17 } cy={ 83 } minR={ 2 } r="5" minArc={ 45 } radialSubdivisions={ 2 } stroke="red" stroke-width="0.1"></RadialGrid>
            <RadialGrid cx={ 17 } cy={ 83 } minR={ 5 } r="8" radialSubdivisions={ 4 } stroke="red" stroke-width="0.1"></RadialGrid>
            <RadialGrid cx={ 17 } cy={ 83 } minR={ 8 } r="12" minArc={ 22.5 } radialSubdivisions={ 8 } stroke="red" stroke-width="0.1"></RadialGrid>
            <CircularMarker cx={ 50 } cy={ 50 } x={ 17 } y={ 83 } size="3" style={ { textTransform: 'uppercase' } } fill="white" href="assets/main_sequence_high_resolution/star_blue03.png" subtitle="青龍" font-size="0.7" title="Blue Sun"/>
            <CircularMarker cx={ 17 } cy={ 83 } x={ 19.5 } y={ 81 } style={ { textTransform: 'uppercase', fontFamily: 'Omnibus' } } fill="white" href="assets/planet15/planet_38.png" title="Meridian"/>
            <CircularMarker cx={ 17 } cy={ 83 } x={ 15 } y={ 85.5 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="New Canaan"/>
            <CircularMarker cx={ 17 } cy={ 83 } x={ 18.5 } y={ 89 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Muir"/>
            <CircularMarker cx={ 17 } cy={ 83 } x={ 20 } y={ 77 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Fury"/>
            <CircularMarker cx={ 17 } cy={ 83 } x={ 27 } y={ 82 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Deadwood"/>
            <CircularMarker cx={ 17 } cy={ 83 } x={ 15.5 } y={ 74 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/hd-hq-2d-planets-hi-res/Lava1.png" title="Dragons Egg"/>
          </g>
          <g id="reaver-space">
            <circle fill="black" cx={ 3 } cy={ 62 } r="7.5" stroke-width="0.1"></circle>
            <ScrapBelt cx={ 3 } cy={ 62 } particles={ 500 } spread={ 4 } r={ 5 }></ScrapBelt>
            <RadialGrid cx={ 3 } cy={ 62 } minR={ 3 } r={ 7.5 } radialSubdivisions={ 12 } stroke="red" stroke-width="0.1"></RadialGrid>
            <CircularMarker cx={ 50 } cy={ 50 } x={ 3 } y={ 62 } style={ { textTransform: 'uppercase' } } fill="white" size="2" href="assets/main_sequence_high_resolution/star_red03.png" title="Burnham"/>
            <CircularMarker cx={ 3 } cy={ 62 } x={ -4.6 } y={ 65 } style={ { textTransform: 'uppercase', fontWeight: '100' } } fill="red" font-size="1.5" subtitle="Reaver Space" title="Burnham Quadrant"/>
            <CircularMarker cx={ 3 } cy={ 62 } x={ 4 } y={ 63 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Miranda"/>
          </g>
        </symbol>
        <symbol id="slots">
          <rect height="1500" width="1500" stroke="white" fill="none" />
          { slots }
        </symbol>
      </defs>
    </svg>
  </>
)

export default IndexPage