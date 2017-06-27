
import window from "./window"
import domReady from "./domready"
import Selector from "./selector"

export function fQuery(selector, context) {

  if (typeof selector === 'function') {
    domReady(selector)
  }
  else {
    return new Selector(selector, context)
  }

}

fQuery.fn = Selector.prototype
