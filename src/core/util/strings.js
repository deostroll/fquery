
function camelCasing(input) {
  let chars = Array.prototype.slice.call(input)

  chars[0] = chars[0].toLowerCase()

  let indexHyphen = chars.indexOf('-')

  if (indexHyphen > -1) {
    chars[indexHyphen + 1] = chars[indexHyphen + 1].toUpperCase()
  }

  return chars.join()
}

export default {
  camesCase: camelCasing
}
