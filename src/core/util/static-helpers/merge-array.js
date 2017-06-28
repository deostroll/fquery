export function mergeArray(dest, src) {
  let a = dest.length, b = 0, c = src.length

  for(;b < c; b++, a++) {
    dest[a] = src[b]
  }

  return dest
}
