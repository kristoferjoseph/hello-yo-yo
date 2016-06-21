var yo = require('yo-yo')
var styles = require('./style.csjs')

module.exports = function title(state) {
  return yo`
    <h1 class=${styles.title}>Hello, ${state.name}</h1>
  `
}
