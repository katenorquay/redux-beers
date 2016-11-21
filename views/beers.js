const html = require('yo-yo')
const beer = require('./beer')
const getBeers = require('../requests/getBeers')
const getStyles = require('../requests/getStyles')
const createButtons = require('../views/createButtons')

const template = (state, dispatch) => {
  return html`
  <div>
    <h1>BEERS</h1>

    ${createButtons(state.styles, dispatch)}
    <ul>
      ${state.loading ? html`<div>LOADING...</div>` : ''}
      ${ (state.showStyle) ?
        [beer(state.sortedBeersByStyle, dispatch), html`<button onclick=${() => dispatch({type: "SHOW_ALL"})}>Show All</button>`]
        : beer(state.beers, dispatch)
      }
    </ul>
    <button onclick=${() => getBeers(state, dispatch)}>Refresh</button>
  </div>
  `
}


module.exports = template
