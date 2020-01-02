import React from "react"
import RadialGrid from '../components/radial-grid.js'
import CircularMarker from '../components/circular-marker.js'
import AsteroidBelt from '../components/asteroids.js'
import ScrapBelt from '../components/asteroids.js'
import Slot from '../components/card.js'
import Ship from '../components/ship.js'
import Map from "../components/map"

let c = {
  x: 60,
  y: 60,
}

let mapBox = [0, 0, 120, 120];

let pc = {
  x: 750,
  y: 750,
}

function circlePath(cx, cy, r) {
  var cx = cx;
  var cy = cy;
  var r = r;
  var d = [];
  var startX = Math.cos(Math.PI)*r + cx;
  var startY = Math.sin(Math.PI)*r + cy;
  var middleX = Math.cos(0)*r + cx;
  var middleY = Math.sin(0)*r + cy;

  d.push("M" + startX + "," + startY);
  d.push("A" + r + "," + r + " 0 1,0 " +  middleX + "," + middleY); // draw half a circle clockwise
  d.push("A" + r + "," + r + " 0 1,0 " +  startX + "," + startY);  // draw another half clockwise
  return  d.join(' ');
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
      href="assets/NASA/HD_189733_b.png"
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

let relay7 = place(35.5, 2.75);
let relay2 = place(34.5, pi*1.813);
let rimLabel = place(43, pi/2);
let oortLabel = place(53.5, pi*.25);

let rim = (
  <g id="rim" clipPath="url(#top-clip)">
    <AsteroidBelt cx={ c.x } cy={ c.y } particles={ 2000 } spread={ 10 } r={ 54 } />
    <g clipPath="url(#bottom-clip)">
      <RadialGrid cx={ c.x } cy={ c.y } minR={ 48 } r={ 60 } radialSubdivisions={ 32 }  minArc={ 5.625 } stroke="DarkSlateGrey" stroke-width=".1" concentricSubdivisions={ 1 } />
    </g>
    <CircularMarker cx={ c.x } cy={ c.y } x={ oortLabel.x } y={ oortLabel.y } style={ { textTransform: 'uppercase', fontWeight: '100' } } fill="DarkSlateGrey" font-size="2" subtitle="歐特雲" title="Oort cloud"/>
    <g clipPath="url(#bottom-clip)">
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
      <g opacity={ .5 }>
        <RadialGrid
          cx={ c.x } 
          cy={ c.y } 
          minR={ 40 }
          r={ 48 }
          minArc={ (360 / 32 * -3) + 5.625 }
          maxArc={ (360 / 32 * 11) + 5.625 }
          radialSubdivisions={ 28 }
          stroke="red"
          stroke-width={ .05 }
          concentricSubdivisions={ 1 }
        />
        <RadialGrid
          cx={ c.x } 
          cy={ c.y } 
          minR={ 32 }
          r={ 40 }
          minArc={ (360 / 32 * -2) + 5.625 }
          maxArc={ (360 / 32 * 10) + 5.625 }
          radialSubdivisions={ 24 }
          stroke="red"
          stroke-width={ .05 }
          concentricSubdivisions={ 1 }
        />
        <RadialGrid
          cx={ c.x } 
          cy={ c.y } 
          minR={ 40 }
          r={ 48 }
          minArc={ (360 / 32 * 15) + 5.625 }
          maxArc={ (360 / 32 * 23) + 5.625 }
          radialSubdivisions={ 16 }
          stroke="red"
          stroke-width={ .05 }
          concentricSubdivisions={ 1 }
        />
        <RadialGrid
          cx={ c.x } 
          cy={ c.y } 
          minR={ 32 }
          r={ 40 }
          minArc={ (360 / 32 * 16) + 5.625 }
          maxArc={ (360 / 32 * 23) + 5.625 }
          radialSubdivisions={ 14 }
          stroke="red"
          stroke-width={ .05 }
          concentricSubdivisions={ 1 }
        />
      </g>
    </g>
    <CircularMarker
      cx={ c.x }
      cy={ c.y }
      x={ relay7.x }
      y={ relay7.y }
      style={ { textTransform: "uppercase" } }
      fill="white"
      title="Cortex Relay 7"
      href="assets/main_sequence_high_resolution/star_white01.png" title="Cortex" subtitle="Relay 7"
    />
    <CircularMarker
      cx={ c.x }
      cy={ c.y }
      x={ relay2.x }
      y={ relay2.y }
      style={ { textTransform: "uppercase" } }
      fill="white"
      title="Cortex Relay 7"
      href="assets/main_sequence_high_resolution/star_white01.png" title="Cortex" subtitle="Relay 2"
    />
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

let borderLabel = {
  north: place(27, pi*1.35),
  south: place(27, pi*.52),
}

let border = (
  <g id="border-space" clipPath="url(#bottom-clip)">
    <g clipPath="url(#top-clip)">
      <RadialGrid cx={ c.x } cy={ c.y } minR={ 16 } r={ 32 } radialSubdivisions={ 32 } stroke="orange" stroke-width="0.1" concentricSubdivisions={ 1 }></RadialGrid>
      <g opacity={ .5 }>
        <RadialGrid
          cx={ c.x } 
          cy={ c.y } 
          minR={ 24 }
          r={ 32 }
          minArc={ 360 / 32 * 2 }
          maxArc={ 360 / 32 * 8 }
          radialSubdivisions={ 12 }
          stroke="orange"
          stroke-width={ .05 }
          concentricSubdivisions={ 1 }
        />
        <RadialGrid
          cx={ c.x } 
          cy={ c.y } 
          minR={ 24 }
          r={ 32 }
          minArc={ 360 / 32 * 17 }
          maxArc={ 360 / 32 * 23 }
          radialSubdivisions={ 12 }
          stroke="orange"
          stroke-width={ .05 }
          concentricSubdivisions={ 1 }
        />
      </g>

      <CircularMarker cx={ c.x } cy={ c.y } x={ borderLabel.north.x } y={ borderLabel.north.y } style={ { fontWeight: 100, textTransform: 'uppercase' } } fill="orange" font-size="2" subtitle="边境空间" title="Border Space"/>
      <CircularMarker cx={ c.x } cy={ c.y } x={ borderLabel.south.x } y={ borderLabel.south.y } style={ { textTransform: 'uppercase', fontWeight: '100' } } fill="orange" font-size="2" subtitle="边境空间" title="Border Space"/>
    </g>
  </g>
);

let osiris = place(9.2, pi*.75);
let londinium = place(3, pi*.35);
let shinon = place(6.2, pi*1.95)
let bernadette = place(3.2, pi*1.45);
let liannJuin = place(6, pi*.55);
let bellerophon = place(10, pi*1.25);
let ariel = place(14.5, pi*1.12);
let valentine = place(13.4, pi*.25);
let lux = place(14, pi*1.5);
let persephone = place(2.7, pi*1.5, lux);
let pelorum = place(2.1, pi*.25, lux);

let whiteSun = (
  <g id="white-sun">
    <g clipPath="url(#bottom-clip)">
      <g clipPath="url(#top-clip)">
        <RadialGrid cx={ c.x } cy={ c.y } minR={ 2 } r={ 5 } radialSubdivisions={ 2 } concentricSubdivisions={ 0 } stroke="SteelBlue" stroke-width="0.1"></RadialGrid>
        <RadialGrid cx={ c.x } cy={ c.y } minArc={ 45 } minR={ 5 } r="8" radialSubdivisions={ 4 } stroke="SteelBlue" stroke-width="0.1"></RadialGrid>
        <RadialGrid cx={ c.x } cy={ c.y } minArc={ 22.5 } minR={ 8 } r="12" radialSubdivisions={ 8 } stroke="SteelBlue" stroke-width="0.1"></RadialGrid>
        <RadialGrid cx={ c.x } cy={ c.y } minArc={ 11.25 } minR={ 12 } r="16" radialSubdivisions={ 16 } stroke="SteelBlue" stroke-width="0.1"></RadialGrid>
      </g>
    </g>

    <CircularMarker cx={ c.x } cy={ c.y } x={ osiris.x } y={ osiris.y } font-size="1" style={ { fontFamily: 'Sexsmith', textTransform: 'uppercase' } } fill="white" href="assets/arcadian_planets_stock_and_vue_7_5_files_by_dmaland_d7qq1bo/arcadiabeta.png" rotate={ 6.2 }  subtitle="Shipworks" title="Osiris"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ londinium.x } y={ londinium.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planets16_high_resolution/planet22.png" rotate={ 5 } title="Londinium"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ liannJuin.x } y={ liannJuin.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/some-planet-sprites-from-a-failed-project/rock0_1.png" rotate={ 1.56 } title="Liann Juin"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ bernadette.x } y={ bernadette.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_39.png" rotate={ 2 } title="Bernadette"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ shinon.x } y={ shinon.y } style={ { textTransform: 'uppercase' } } href="assets/triplanetary___stock_images_and_vue_7_5_files_by_dmaland_d7rpqrb/bringerofwar-t.png" rotate={ 4.2 } fill="white" title="Shinon"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ bellerophon.x } y={ bellerophon.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/arcadian_planets_stock_and_vue_7_5_files_by_dmaland_d7qq1bo/arcadiaalpha-t.png" rotate={ 3.7 } title="Bellerophon"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ ariel.x } y={ ariel.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/Colorful_planets/spr_planet02.png" rotate={ 5.4 } title="Ariel"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ valentine.x } y={ valentine.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/Colorful_planets/spr_planet01.png" rotate={ 5.5 } title="Valentine"/>
    <CircularMarker cx={ 65 } cy={ 10 } x={ c.x } y={ c.y } style={ { textTransform: 'uppercase' } } fill="white" size="3" href="assets/main_sequence_high_resolution/star_white02.png" subtitle="西方白虎" title="White Sun"/>
    <g id="lux">
      <RadialGrid cx={ lux.x } cy={ lux.y } r="4" stroke="SteelBlue" stroke-width="0.1" radialSubdivisions={ 2 }></RadialGrid>
      <CircularMarker cx={ lux.x } cy={ lux.y } x={ persephone.x } y={ persephone.y } style={ { fontFamily: 'TallDeco', textTransform: 'uppercase' } } fill="white" href="assets/hd-hq-2d-planets-hi-res/Terran1.png" title="Persephone"/>
      <CircularMarker cx={ lux.x } cy={ lux.y } x={ pelorum.x } y={ pelorum.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Pelorum"/>
      <CircularMarker cx={ c.x } cy={ c.y } x={ lux.x } y={ lux.y } style={ { textTransform: 'uppercase' } } fill="white" size="2.5" href="assets/main_sequence_high_resolution/star_yellow04.png" title="Lux"/>
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

let murphyC = place(14, pi*.35, georgiaC);
let shadow = place(2, pi*.2, murphyC);
let hera = place(2.5, pi*.85, murphyC);
let aphrodite = place(3, pi*1.44, murphyC);

let murphy = (
  <g id="murphy">
    <RadialGrid cx={ murphyC.x } cy={ murphyC.y } r="4.5" minArc={ 86.5 } radialSubdivisions={ 3 } stroke="orange" stroke-width="0.1"></RadialGrid>
    <CircularMarker ox={ georgiaC.x } oy={ georgiaC.y } cx={ c.x } cy={ c.y } x={ murphyC.x } y={ murphyC.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/main_sequence_high_resolution/star_red03.png" size="3" title="Murphy"/>
    <CircularMarker cx={ murphyC.x } cy={ murphyC.y } x={ shadow.x } y={ shadow.y } style={ { textTransform: 'uppercase' } } rotate={ 4 } fill="white" href="assets/shisma/Fictional_Planet_Vulcan.png" title="Shadow"/>
    <CircularMarker cx={ murphyC.x } cy={ murphyC.y } x={ hera.x } y={ hera.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/shisma/Fictional_Planet_Qo'noS.png" rotate={ 4 } title="Hera"/>
    <CircularMarker cx={ murphyC.x } cy={ murphyC.y } x={ aphrodite.x } y={ aphrodite.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/shisma/Fictional_Planet_Andoria.png" rotate={ 4 } title="Aphrodite"/>
  </g>
);

let georgia = (
  <g id="georgia">
    <g clipPath="url(#top-clip)">
      <RadialGrid cx={ georgiaC.x } cy={ georgiaC.y } minR={ 2 } r="5" minArc={ 90 } radialSubdivisions={ 2 } stroke="orange" stroke-width="0.1"></RadialGrid>
      <RadialGrid cx={ georgiaC.x } cy={ georgiaC.y } minR={ 5 } r="8" minArc={ 45 } radialSubdivisions={ 4 } stroke="orange" stroke-width="0.1"></RadialGrid>
      <RadialGrid cx={ georgiaC.x } cy={ georgiaC.y } minR={ 8 } r="12" minArc={ 22.5 } radialSubdivisions={ 8 } stroke="orange" stroke-width="0.1"></RadialGrid>
    </g>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ regina.x } y={ regina.y } style={ { fontFamily: 'Chi-Town', textTransform: 'lowercase' } } rotate={ 5 } fill="white" href="assets/planet15/planet_41.png" title="Regina"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ athens.x } y={ athens.y } style={ { textTransform: 'uppercase' } } rotate={ 1.2 } fill="white" href="assets/planet15/planet_44.png" title="Athens"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ newhope.x } y={ newhope.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Newhope"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ ithaca.x } y={ ithaca.y } style={ { textTransform: 'uppercase' } } rotate={ .6 } fill="white" href="assets/planets16_high_resolution/planet26.png" title="Ithaca"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ priam.x } y={ priam.y } rotate={ .7 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_46.png" title="Priam"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ kerry.x } y={ kerry.y } style={ { textTransform: 'uppercase' } } rotate={ 5.7 } fill="white" href="assets/planet15/planet_45.png" title="Kerry"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ threeHills.x } y={ threeHills.y } style={ { textTransform: 'uppercase' } } rotate={ pi*1.5 } fill="white" href="assets/planet15/planet_36.png" title="Three Hills"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ ezra.x } y={ ezra.y } style={ { textTransform: 'uppercase' } } rotate={ 1 } fill="white" href="assets/planet15/planet_35.png" title="Ezra"/>
    <CircularMarker cx={ georgiaC.x } cy={ georgiaC.y } x={ boros.x } y={ boros.y } rotate={ pi } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_37.png" title="Boros"/>
    <CircularMarker cx={ c.x } cy={ c.y } x={ georgiaC.x } y={ georgiaC.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/main_sequence_high_resolution/star_yellow02.png" size="3" subtitle="黄龙" title="Georgia"/>
    { murphy }
  </g>
);


let redSunC = place(26, 0);
let motherlodeLabel = {
  north: place(4.5, pi*1.5, redSunC),
  south: place(4.5, pi*.5, redSunC),
};
let jubilee = place(10.25, pi*1.75, redSunC);
let ansons = place(8.65, pi*.25, redSunC);
let greenleaf = place(6.75, pi, redSunC);
let harvest = place(6, 0, redSunC);
let albans = place(6.23, pi*.55, redSunC);
let jiangyn = place(2.6, pi, redSunC);
let newMelburne = place(2.85, 0, redSunC);

let heinleinC = place(16.5, pi*.68, redSunC);
let silverhold = place(2.75, pi*1.5, heinleinC);
let triumph = place(3.55, pi*.5, heinleinC);

let heinlein = (
  <g id="heinlein">
    <RadialGrid cx={ heinleinC.x } cy={ heinleinC.y } minR={ 2 } r="5" radialSubdivisions={ 2 } stroke="orange" stroke-width="0.1" minArc={ 36 }></RadialGrid>
    <CircularMarker ox={ redSunC.x } oy={ redSunC.y } cx={ c.x } cy={ c.y } x={ heinleinC.x } y={ heinleinC.y } size="1.6" style={ { textTransform: 'uppercase' } } fill="white" href="assets/main_sequence_high_resolution/star_red04.png" title="Heinlein"/>
    <CircularMarker cx={ heinleinC.x } cy={ heinleinC.y } x={ silverhold.x } y={ silverhold.y } style={ { fontFamily: 'Insane Rodeo', textTransform: 'uppercase' } } fill="white" href="assets/arcadian_planets_stock_and_vue_7_5_files_by_dmaland_d7qq1bo/arcadiagamma.png" rotate={ pi*1.5 } subtitle="Amunitions" title="Silverhold"/>
    <CircularMarker cx={ heinleinC.x } cy={ heinleinC.y } x={ triumph.x } y={ triumph.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/arcadian_planets_stock_and_vue_7_5_files_by_dmaland_d7qq1bo/arcadiadelta.png" rotate={ 4 } title="Triumph"/>
  </g>
);

let himinbjoergC = place(17.7, pi*1.415, redSunC);
let himinbjoergR = 6;
let aesir = place(3.5, pi*1.434, himinbjoergC);
let brisengamen = place(3.75, pi*.434, himinbjoergC);
let spaceBaazar = place(9.7, pi*1.25, redSunC);

let himinbjoerg = (
  <g id="himinbjoerg">
    <RadialGrid cx={ himinbjoergC.x } cy={ himinbjoergC.y } minR={ 2 } r={ himinbjoergR } radialSubdivisions={ 2 } minArc={ 76 } stroke="orange" stroke-width="0.1"></RadialGrid>
    <CircularMarker ox={ redSunC.x } oy={ redSunC.y } cx={ c.x } cy={ c.y } x={ himinbjoergC.x } y={ himinbjoergC.y } style={ { textTransform: 'uppercase' } } fill="white" font-size="0.7" size="2" href="assets/main_sequence_high_resolution/star_red01.png" title="Himinbjörg"/>
    <CircularMarker cx={ himinbjoergC.x } cy={ himinbjoergC.y } x={ aesir.x } y={ aesir.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Aesir"/>
    <CircularMarker cx={ himinbjoergC.x } cy={ himinbjoergC.y } x={ brisengamen.x } y={ brisengamen.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Brisengamen"/>
  </g>
);

let redSun = (
  <g id="red-sun">
    <AsteroidBelt cx={ redSunC.x } cy={ redSunC.y } particles={ 500 } spread={ 1.2 } r={ 4.5 } />
    <CircularMarker cx={ redSunC.x } cy={ redSunC.y } x={ motherlodeLabel.north.x } y={ motherlodeLabel.north.y } style={ { textTransform: 'uppercase' } } fill="silver" font-size="0.35" title="Motherlode"/>
    <CircularMarker cx={ redSunC.x } cy={ redSunC.y } x={ motherlodeLabel.south.x } y={ motherlodeLabel.south.y } style={ { textTransform: 'uppercase' } } fill="silver" font-size="0.35" title="Motherlode"/>
    <g clipPath="url(#top-clip)">
      <RadialGrid cx={ redSunC.x } cy={ redSunC.y } minR={ 2 } r="5" minArc={ 90 } radialSubdivisions={ 2 } stroke="orange" stroke-width="0.1"></RadialGrid>
      <RadialGrid cx={ redSunC.x } cy={ redSunC.y } minR={ 5 } r="8" minArc={ 45 } radialSubdivisions={ 4 } stroke="orange" stroke-width="0.1"></RadialGrid>
      <RadialGrid cx={ redSunC.x } cy={ redSunC.y } minR={ 8 } r="12" minArc={ 22.5 } radialSubdivisions={ 8 } stroke="orange" stroke-width="0.1"></RadialGrid>
    </g>
    <CircularMarker cx={ redSunC.x } cy={ redSunC.y } x={ spaceBaazar.x } y={ spaceBaazar.y } style={ { fontFamily: 'AnchorJack' } } fill="white" href="assets/Eridani-7-OBJ-552992838/space-bazaar.png" rotate={ pi + pi / 2 } subtitle="Space Bazaar" title="李申的市场" />
    <CircularMarker cx={ c.x } cy={ c.y } x={ redSunC.x } y={ redSunC.y } size="3" style={ { textTransform: 'uppercase' } } fill="white" href="assets/main_sequence_high_resolution/star_red04.png" subtitle="南方朱雀" title="Red Sun"/>
    <CircularMarker cx={ redSunC.x } cy={ redSunC.y } x={ newMelburne.x } y={ newMelburne.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/ESO/Gliese 667Cb.png" rotate={ pi*1.35 } title="New Melburne"/>
    <CircularMarker cx={ redSunC.x } cy={ redSunC.y } x={ jiangyn.x } y={ jiangyn.y } style={ { textTransform: 'uppercase' } } fill="white" rotate={ pi*1.1 } href="assets/NASA/Kepler-452b.png" subtitle="Jiangyn" title="江阴"/>
    <CircularMarker cx={ redSunC.x } cy={ redSunC.y } x={ harvest.x } y={ harvest.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Harvest"/>
    <CircularMarker cx={ redSunC.x } cy={ redSunC.y } x={ ansons.x } y={ ansons.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Anson's World"/>
    <CircularMarker cx={ redSunC.x } cy={ redSunC.y } x={ albans.x } y={ albans.y } style={ { textTransform: 'uppercase' } } fill="white" rotate={ pi*.95 } href="assets/NASA/Kepler-20f.png" title="St. Albans"/>
    <CircularMarker cx={ redSunC.x } cy={ redSunC.y } x={ greenleaf.x } y={ greenleaf.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Greenleaf"/>
    <CircularMarker cx={ redSunC.x } cy={ redSunC.y } x={ jubilee.x } y={ jubilee.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Jubilee"/>
    { heinlein }
    { himinbjoerg }
  </g>
);

let kalidasaC = place(42.5, pi*1.613);
let penglaiC = place(20, pi*.225, kalidasaC);
let beloux = place(3, pi*1.3, penglaiC);
let newhall = place(3.4, pi*.5, penglaiC);
let verbana = place(3.2, pi*1.05, kalidasaC);
let shoJeDowns = place(3.6, pi*1.93, kalidasaC);
let zeus = place(12.8, pi*.745, kalidasaC);
let sailsburry = place(14.5, pi*1.245, kalidasaC);
let aberdeen = place(10, pi*1.17, kalidasaC);
let beaumonde = place(13.2, pi*1, kalidasaC);
let djinnsBane = place(14.2, pi*.617, kalidasaC);
let zephyr = place(10.7, pi*.35, kalidasaC);
let newKashmir = place(9, pi*.65, kalidasaC);
let constance = place(6, pi*.2, kalidasaC);
let angel = place(6.5, pi*.75, kalidasaC);
let heaven = place(6.65, pi*1.27, kalidasaC);
let whittier = place(9.8, pi*.90, kalidasaC);

let penglai = (
  <g id="penglai">
    <RadialGrid cx={ penglaiC.x } cy={ penglaiC.y } minR={ 2 } r={ 5 } radialSubdivisions={ 2 } stroke="red" stroke-width="0.1"></RadialGrid>
    <CircularMarker ox={ kalidasaC.x } oy={ kalidasaC.y } cx={ c.x } cy={ c.y } x={ penglaiC.x } y={ penglaiC.y } style={ { textTransform: 'uppercase' } } fill="white" font-size="0.7" size="3" href="assets/main_sequence_high_resolution/star_yellow01.png" subtitle="蓬萊仙島" title="Penglai"/>
    <CircularMarker cx={ penglaiC.x } cy={ penglaiC.y } x={ newhall.x } y={ newhall.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planets16_high_resolution/planet19.png" title="Newhall"/>
    <CircularMarker cx={ penglaiC.x } cy={ penglaiC.y } x={ beloux.x } y={ beloux.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planets16_high_resolution/planet30.png" title="Belux"/>
  </g>
);

let kalidasa = (
  <g id="kalidasa">
    <g clipPath="url(#top-clip)" >
      <RadialGrid cx={ kalidasaC.x } cy={ kalidasaC.y } minR={ 2 } r="5" minArc={ 115 } radialSubdivisions={ 2 } stroke="red" stroke-width="0.1"></RadialGrid>
      <RadialGrid cx={ kalidasaC.x } cy={ kalidasaC.y } minR={ 5 } r="8" minArc={ 70 } radialSubdivisions={ 4 } stroke="red" stroke-width="0.1"></RadialGrid>
      <RadialGrid cx={ kalidasaC.x } cy={ kalidasaC.y } minR={ 8 } r="12" minArc={ 92.5 } radialSubdivisions={ 8 } stroke="red" stroke-width="0.1"></RadialGrid>
      <RadialGrid cx={ kalidasaC.x } cy={ kalidasaC.y } minR={ 12 } r="16" minArc={ 100 } radialSubdivisions={ 16 } stroke="red" stroke-width="0.1"></RadialGrid>
    </g>
    <CircularMarker cx={ c.x } cy={ c.y } x={ kalidasaC.x } y={ kalidasaC.y } style={ { textTransform: 'uppercase' } } fill="white" font-size="0.7" size="3" href="assets/main_sequence_high_resolution/star_yellow02.png" subtitle="玄武" title="Kalidasa"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ zeus.x } y={ zeus.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_36.png" title="Zeus"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ djinnsBane.x } y={ djinnsBane.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planets16_high_resolution/planet18.png" title="Djinn's Bane"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ zephyr.x } y={ zephyr.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Zephyr"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ newKashmir.x } y={ newKashmir.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_41.png" title="New Kashmir"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ constance.x } y={ constance.y } rotate={ 1 } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planets16_high_resolution/planet23.png" title="Constance"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ verbana.x } y={ verbana.y } style={ { textTransform: 'uppercase' } } rotate={ 3.5 } fill="white" href="assets/planets16_high_resolution/planet32.png" title="Verbana"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ shoJeDowns.x } y={ shoJeDowns.y } style={ { textTransform: 'uppercase' } } rotate={ 5 } fill="white" href="assets/planets16_high_resolution/planet22.png" title="Sho-Je Downs"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ angel.x } y={ angel.y } style={ { textTransform: 'uppercase' } } rotate={ 1.5 } fill="white" href="assets/planets16_high_resolution/planet30.png" title="Angel"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ heaven.x } y={ heaven.y } style={ { textTransform: 'uppercase' } } rotate={ 5.6 } fill="white" href="assets/planets16_high_resolution/planet29.png" title="Heaven"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ whittier.x } y={ whittier.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planets16_high_resolution/planet28.png" title="Whittier"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ beaumonde.x } y={ beaumonde.y } style={ { textTransform: 'uppercase', fontFamily: 'Omnibus' } } fill="white" href="assets/planet15/planet_43.png" title="Beaumonde"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ aberdeen.x } y={ aberdeen.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_39.png" title="Aberdeen"/>
    <CircularMarker cx={ kalidasaC.x } cy={ kalidasaC.y } x={ sailsburry.x } y={ sailsburry.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_37.png" title="Sailsburry"/>
    { penglai }
  </g>
);

function findThird(one, two, distFromTwo) {
  let d = Math.sqrt(Math.pow(two.x - one.x, 2) + Math.pow(two.y - one.y, 2));
  let r = distFromTwo / d;

  return {
    x: r * two.x + (1 - r) * one.x,
    y: r * two.y + (1 - r) * one.y,
  }
}

let blueSunC = place(47, pi*.75);
let burnhamC = place(25.5, pi*1.32, blueSunC);
let burnhamLabel = findThird(burnhamC,c, -8.5);
let miranda = place(2.5, pi*.32, burnhamC);
let dragonsEgg = place(10, pi*1.5, blueSunC);
let newCanaan = place(3.55, pi*.75, blueSunC);
let deadwood = place(10.4, pi*1.94, blueSunC);
let fury = place(6.5, pi*1.56, blueSunC);
let muir = place(6.5, pi*.44, blueSunC);
let meridian = place(2.8, pi*1.75, blueSunC);

let uroborusLabel = {
  north: findThird(blueSunC, c, -8.5),
  south: findThird(blueSunC, c, 8.5)
}

let burnham = (
  <g id="reaver-space">
    <ScrapBelt cx={ burnhamC.x } cy={ burnhamC.y } particles={ 500 } spread={ 5 } r={ 6 }></ScrapBelt>
    <RadialGrid cx={ burnhamC.x } cy={ burnhamC.y } minR={ 4 } r={ 7.5 } radialSubdivisions={ 12 } stroke="red" stroke-width="0.1"></RadialGrid>
    
    <g opacity=".5">
      <RadialGrid cx={ burnhamC.x } cy={ burnhamC.y } minR={ 4 } r={ 7.5 } minArc={ 360 / 12 * 2 } maxArc={ 360 / 12 * 11 } radialSubdivisions={ 18 } concentricSubdivisions={ 1 } stroke="red" stroke-width="0.1"></RadialGrid>
    </g>

    <path fill="url(#alert)" fill-rule="evenodd" d={ circlePath(burnhamC.x, burnhamC.y, 7.5 ) + circlePath(burnhamC.x, burnhamC.y, 4) } />
    
    <CircularMarker ox={ blueSunC.x } oy={ blueSunC.y } cx={ c.x } cy={ c.y } x={ burnhamC.x } y={ burnhamC.y } style={ { textTransform: 'uppercase' } } fill="white" size="2" href="assets/main_sequence_high_resolution/star_red03.png" title="Burnham"/>
    <CircularMarker cx={ burnhamC.x } cy={ burnhamC.y } x={ burnhamLabel.x } y={ burnhamLabel.y } style={ { textTransform: 'uppercase', fontWeight: '100' } } fill="red" font-size="1.5" subtitle="Reaver Space" title="Burnham Quadrant"/>
    <CircularMarker cx={ burnhamC.x } cy={ burnhamC.y } x={ miranda.x } y={ miranda.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Miranda"/>
  </g>
);

let blueSun = (
  <g id="blue-sun">
    <AsteroidBelt cx={ blueSunC.x } cy={ blueSunC.y }  particles={ 500 } spread={ 1.2 } r={ 8.5 }></AsteroidBelt>
    <CircularMarker cx={ blueSunC.x } cy={ blueSunC.y }  x={ uroborusLabel.north.x } y={ uroborusLabel.north.y } style={ { textTransform: 'uppercase' } } fill="silver" font-size="0.35" title="Uroborus Belt"/>
    <CircularMarker cx={ blueSunC.x } cy={ blueSunC.y }  x={ uroborusLabel.south.x } y={ uroborusLabel.south.y } style={ { textTransform: 'uppercase' } } fill="silver" font-size="0.35" title="Uroborus Belt"/>
    <RadialGrid cx={ blueSunC.x } cy={ blueSunC.y } minR={ 2 } r="5" minArc={ 45 } radialSubdivisions={ 2 } stroke="red" stroke-width="0.1" />
    <RadialGrid cx={ blueSunC.x } cy={ blueSunC.y }  minR={ 5 } r="8" radialSubdivisions={ 4 } stroke="red" stroke-width="0.1" />
    <RadialGrid cx={ blueSunC.x } cy={ blueSunC.y }  minR={ 8 } r="12" minArc={ 22.5 } radialSubdivisions={ 8 } stroke="red" stroke-width="0.1" />
    <CircularMarker cx={ c.x } cy={ c.y } x={ blueSunC.x } y={ blueSunC.y } size="3" style={ { textTransform: 'uppercase' } } fill="white" href="assets/main_sequence_high_resolution/star_blue03.png" subtitle="青龍" font-size="0.7" title="Blue Sun"/>
    <CircularMarker cx={ blueSunC.x } cy={ blueSunC.y } x={ meridian.x } y={ meridian.y } style={ { textTransform: 'uppercase', fontFamily: 'Omnibus' } } fill="white" href="assets/planet15/planet_38.png" title="Meridian"/>
    <CircularMarker cx={ blueSunC.x } cy={ blueSunC.y } x={ newCanaan.x } y={ newCanaan.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="New Canaan"/>
    <CircularMarker cx={ blueSunC.x } cy={ blueSunC.y } x={ muir.x } y={ muir.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Muir"/>
    <CircularMarker cx={ blueSunC.x } cy={ blueSunC.y } x={ fury.x } y={ fury.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/planet15/planet_38.png" title="Fury"/>
    <CircularMarker cx={ blueSunC.x } cy={ blueSunC.y } x={ deadwood.x } y={ deadwood.y } style={ { textTransform: 'uppercase' } } fill="white" href="assets/hd-hq-2d-planets-hi-res/Ice1.png" title="Deadwood"/>
    <CircularMarker cx={ blueSunC.x } cy={ blueSunC.y } x={ dragonsEgg.x } y={ dragonsEgg.y } style={ { textTransform: 'uppercase' } } fill="white" rotate={ 3.5 } href="assets/nasa/Kepler-20e.png" title="Dragons Egg"/>
    { burnham }
  </g>
);

const IndexPage = () => (
  <>
    <link rel="stylesheet" href="map.css" />
    <Map width="1000" height="1400" zoom={ 1 } />
    <svg heigh="0" width="0">
      <defs>
        <pattern id="alert" patternUnits="userSpaceOnUse" width=".7" height=".7" patternTransform="rotate(25)">
          <line x1="0" y="0" x2="0" y2=".7" stroke="red" stroke-width=".6" opacity=".25" />
        </pattern>
        <clipPath id="top-clip" viewBox={ mapBox.join(' ') }>
          <path clip-rule="evenodd" d={ circlePath(c.x, c.y, 60) + circlePath(lux.x, lux.y, 4) + circlePath(qin.x, qin.y, 3.25) + circlePath(himinbjoergC.x, himinbjoergC.y, himinbjoergR) + circlePath(burnhamC.x, burnhamC.y, 7.5) + circlePath(heinleinC.x, heinleinC.y , 5) + circlePath(penglaiC.x, penglaiC.y, 5) + circlePath( murphyC.x, murphyC.y, 4.5) } />
        </clipPath>
        <clipPath id="bottom-clip" viewBox={ mapBox.join(' ') }>
          <path clip-rule="evenodd" d={ circlePath(c.x, c.y, 60) + circlePath(redSunC.x, redSunC.y, 12) + circlePath(georgiaC.x, georgiaC.y, 12) + circlePath(blueSunC.x, blueSunC.y, 12)  + circlePath(kalidasaC.x, kalidasaC.y, 16) } />
        </clipPath>
        <symbol id="grid" viewBox={ mapBox.join(' ') }>
          <rect fill="black" x={ mapBox[0] } y={ mapBox[1] } width={ mapBox[2] } height={ mapBox[3] }  />
          { rim }
          { halo }
          { border }
          { whiteSun }
          { georgia }
          { redSun }
          { kalidasa }
          { blueSun }
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