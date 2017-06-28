import Selector from "core/selector"

function addSingleAttribute(attribute, value) {
  return this.each((idx, el) => {
    el.setAttribute(attribute, value)
  });
}

function attr() {
  let selector = this
  if (arguments.length === 1 && typeof arguments[0] === 'object') {
    let attributeObject = arguments[0]
    let keys = Object.keys(attributeObject)

    keys.forEach(key => {
      let value = attributeObject[key]
      let actualKey = camelCase(key)

      addSingleAttribute.call(this, actualKey, value)
    });

    return this;
  }

  // let key = camelCase(arguments[0]), value = arguments[1]
  let key = arguments[0], value = arguments[1]

  return addSingleAttribute.call(this, key, value)
}

Selector.prototype.attr = attr
