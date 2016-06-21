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

  .title {
    font-family: sans-serif;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .container {
    max-width: 80%;
    margin: 0 auto;
    padding: 2rem;
    background: #eee;
    border-radius: 0.5rem;
  }

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