import Selector from "core/selector"

function each(fn) {
  let nodes = this.nodes
  nodes.forEach((n, idx) => fn.call(n, idx, n))
  return this
}

Selector.prototype.each = each
