
let regex = {
  single: /<(.*)\/>/m,
  double: /<(.*)><\/(.*)>/m
}

let isSingleType = (str) => regex.single.test(str)
let isDoubleType = (str) => regex.double.test(str)

let isValidDoubleType = (str) => {
  res = regex.double.exec(str)
  return {
    valid: res[1] === res[2],
    regexResult: res
  }
}

const extract = function(str) {
  if (isSingleType(str)) {
    return regex.single.exec(str)[1]
  }
  else {
    let { valid, regexResult } = isValidDoubleType(str)
    return valid ? regexResult[1] : null
  }
}

let obj = { extract }

export default obj
