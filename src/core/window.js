
function makeWindow() {
  return typeof window === 'object' ? window : this
}

export default makeWindow()
