var csjs = require('csjs')
module.exports = csjs`
  .input {
    width: 100%;
    font-weight: 500;
    font-size: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 1rem;
  }

  .input:focus {
    outline: none;
    border: 1px solid #4242ba;
    box-shadow: inset 0 0 3px #2828b9;
  }
`
