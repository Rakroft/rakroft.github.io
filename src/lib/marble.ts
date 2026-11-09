// Genera el fondo de mármol como una imagen SVG (sin archivos de imagen).
// 1) Una capa de "nubes" suaves con feTurbulence.
// 2) Unas líneas diagonales que se deforman con ruido (feDisplacementMap) => vetas.

type Rgb = [number, number, number];

const hex = (h: string): Rgb => {
  const n = parseInt(h.replace('#', ''), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

const tint = ([r, g, b]: Rgb, alpha: string) =>
  `0 0 0 0 ${r.toFixed(3)} 0 0 0 0 ${g.toFixed(3)} 0 0 0 0 ${b.toFixed(3)} ${alpha}`;

// Vetas: [inicio x, curvatura, grosor, opacidad]. Van en diagonal de arriba-izquierda a abajo-derecha.
const veins: [number, number, number, number][] = [
  [-700, 120, 2.2, 0.55],
  [-420, -80, 0.8, 0.45],
  [-150, 160, 1.4, 0.5],
  [180, -140, 0.6, 0.4],
  [430, 90, 2.6, 0.45],
  [640, -60, 0.7, 0.5],
  [980, 140, 1.2, 0.4],
  [1250, -110, 0.5, 0.45],
];

const veinPaths = veins
  .map(([x, c, w, o]) => {
    const x2 = x + 1300;
    return `<path d="M${x} -100 Q${x + 650 + c} ${500 - c} ${x2} 1100" stroke-width="${w}" stroke-opacity="${o}"/>`;
  })
  .join('');

function marbleSvg(opts: { paper: string; cloud: string; vein: string; cloudOpacity: number; veinOpacity: number }) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<filter id="cloud" x="0" y="0" width="100%" height="100%">
<feTurbulence type="fractalNoise" baseFrequency="0.0014 0.003" numOctaves="4" seed="11"/>
<feColorMatrix type="matrix" values="${tint(hex(opts.cloud), '1.5 0 0 0 -0.55')}"/>
</filter>
<filter id="warp" x="-20%" y="-20%" width="140%" height="140%">
<feTurbulence type="fractalNoise" baseFrequency="0.0035 0.006" numOctaves="5" seed="3" result="n"/>
<feDisplacementMap in="SourceGraphic" in2="n" scale="260" xChannelSelector="R" yChannelSelector="G" result="d"/>
<feGaussianBlur in="d" stdDeviation="0.6"/>
</filter>
<filter id="warp2" x="-20%" y="-20%" width="140%" height="140%">
<feTurbulence type="fractalNoise" baseFrequency="0.009 0.014" numOctaves="3" seed="8" result="n"/>
<feDisplacementMap in="SourceGraphic" in2="n" scale="120" xChannelSelector="G" yChannelSelector="R"/>
</filter>
<rect width="100%" height="100%" fill="${opts.paper}"/>
<rect width="100%" height="100%" filter="url(#cloud)" opacity="${opts.cloudOpacity}"/>
<g fill="none" stroke="${opts.vein}" opacity="${opts.veinOpacity}" filter="url(#warp)">${veinPaths}</g>
<g fill="none" stroke="${opts.vein}" opacity="${(opts.veinOpacity * 0.6).toFixed(2)}" filter="url(#warp2)" transform="translate(1600 0) scale(-1 1)">${veinPaths}</g>
</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\n/g, ''))}")`;
}

export const marbleLight = marbleSvg({
  paper: '#ecebe8',
  cloud: '#ffffff',
  vein: '#8a867f',
  cloudOpacity: 0.6,
  veinOpacity: 0.55,
});

export const marbleDark = marbleSvg({
  paper: '#141413',
  cloud: '#2b2a28',
  vein: '#6f6b65',
  cloudOpacity: 0.75,
  veinOpacity: 0.5,
});
