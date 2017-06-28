import window from "./window"

let handlers = []
let document = window.document
let runOnce = false

export default function domReady(fn) {
  if (runOnce) {
    fn.call(document)
  }
  else {

    document.addEventListener('DOMContentLoaded', function onReady(){
      runOnce = true

      document.removeEventListener('DOMContentLoaded', onReady)

      while(handlers.length) {
        handlers.shift().call(document)
      }
    })

    handlers.push(fn)
  }
}
