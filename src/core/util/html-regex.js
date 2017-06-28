
let regex = {
  single: /<(.*)\/>/m,
  double: /<(.*)><\/(.*)>/m
}

const isSingleType = (str) => regex.single.test(str)
const isDoubleType = (str) => regex.double.test(str)

const isValidDoubleType = (str) => {
  res = regex.double.exec(str)
  return {
    valid: res[1] === res[2],
    regexResult: res
  }
}
const extract = (str) => isSingleType(str) ?
  regex.single.exec(str)[1]
    :
  ((a) => {
  let {valid, regexResult } = isValidDoubleType(a)
  if (valid) {
    return regexResult[1]
  }
  else {
    return null
  }
})(str)

export default {
  extract: extract
}
