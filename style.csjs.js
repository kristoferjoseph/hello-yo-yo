var csjs = require('csjs')
module.exports = csjs`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 2rem;
  }
`
