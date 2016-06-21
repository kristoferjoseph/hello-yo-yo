var yo = require('yo-yo')
var styles = require('./style.csjs')
var Title = require('../title')
var Input = require('../input')

module.exports = function control(state) {
  return yo`
    <div class=${styles.container}>
      ${Title(state)}
      ${Input(state)}
    </div>
  `
}
