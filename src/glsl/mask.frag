#include ./effects/ink.glsl;
#include ./effects/blur.glsl;
#include ./effects/swirl.glsl;
#include ./effects/pixelate.glsl;

uniform sampler2D tDiffuse;
uniform float strength;
uniform float radius;

uniform vec2 center;
uniform vec2 size;
uniform vec4 mask;

varying vec2 vUv;

void main (void) {
  gl_FragColor = blur(tDiffuse, mask, vUv, strength / 512.0);

  // gl_FragColor = pixelate(tDiffuse, mask, size, vUv, strength);

  // gl_FragColor = swirl(tDiffuse, vec2(
  //   size.x / size.x, size.y / size.x
  // ), vUv, center, radius, (strength - 13.0) / -2.4);

  // gl_FragColor = ink(tDiffuse, mask, size, vUv, (strength - 1.0) / 24.0);
}