
import window from "core/window"
import domReady from "core/domready"
import Selector from "core/selector"

import mergeArray from "core/util/static-helpers/merge-array"

export function fQuery(selector, context) {

  if (typeof selector === 'function') {
    domReady(selector)
  }
  else {
    return new Selector(selector, context)
  }

}

fQuery.fn = Selector.prototype
fQuery.merge = mergeArray
