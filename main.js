var yo = require('yo-yo')
var styles = require('./style.csjs')
var control = require('./components/control')
var state = {
  name: 'You',
  placeholder: 'Enter your name',
  change: change
}
var ctrl = control(state)

function change(e) {
  var newState = Object.assign({}, state)
  newState.name = e.target.value
  var newCtrl = control(newState)
  yo.update(ctrl, newCtrl)
}

document.getElementById('root').appendChild(ctrl)
