var yo = require('yo-yo')
var styles = require('./style.csjs.js')

module.exports = function(state) {
  return yo`
    <input
      autofocus
      class=${styles.input}
      placeholder=${state.placeholder}
      oninput=${state.change}
    />
  `
}
