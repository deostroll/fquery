import fQuery from "core"

function each(fn) {
  let nodes = this.nodes
  nodes.forEach((n, idx) => fn.call(n, idx, n))
  return this
}

fQuery.fn.each = each
