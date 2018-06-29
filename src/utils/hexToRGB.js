export default function hexToRGB(hex) {
  const hexAlphas = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  }

  function hexesToRGB(hex) {
    let hex0 = hexAlphas[hex[0]] ? hexAlphas[hex[0]] : hex[0]
    let hex1 = hexAlphas[hex[1]] ? hexAlphas[hex[1]] : hex[1]
    hex0 = Number(hex0)
    hex1 = Number(hex1)
    return (hex1 * 16) + hex0
  }

  return hex
  .substr(1)
  .match(/.{2}/g)
  .map(hexesToRGB)
  .join(',')
}
