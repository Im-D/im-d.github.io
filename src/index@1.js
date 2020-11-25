import { html } from 'https://unpkg.com/lit-html?module';

import Header from './components/Header@1.js'
import Main from './components/Main@1.js'

export default (data) => {
  return html`
    ${Header()}
    ${Main()}
  `;
}