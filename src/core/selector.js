import window from "core/window"
import { extract } from "core/util/html-regex"

let document = window.document

// let elementRegexes = {
//   singleTag: /<(.*)\/>/m,
//   doubleTag: /<(.*)></(.*)>/m,
//   isSingle: (str) => {
//     single
//   }
// }

export default function Selector(selector, context) {
  this.nodes = []

  if (typeof selector === 'string' && selector[0] === '<') {
    let node = createNode(extract(selector))
    this.nodes = [node]
  }
  else if (typeof selector === 'object' && selector instanceof Selector) {
    this.nodes = selector.nodes
  }
  else if (typeof selector === 'string' && typeof context === 'string') {
    let ctx = new Selector(context)
    this.nodes = ctx.nodes.reduce((n, el) => fQuery.merge(n, el.querySelectorAll(selector)), this.nodes)
  }
  else if (typeof selector === 'string') {
    let query = document.querySelectorAll(selector)
    this.nodes = Array.prototype.slice.call(query)
  }
  else {
    throw 'Unknown argument'
  }

  this.length = this.nodes.length

  this.nodes.forEach((n, idx) => this[idx] = n)
}

function createNode(nodeStr) {
  return document.createElement(nodeStr)
}
