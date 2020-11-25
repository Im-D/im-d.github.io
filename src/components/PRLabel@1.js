import { html } from 'https://unpkg.com/lit-html?module';

export default ({name = '', color = '#fff'}) => {
  return html`
    <style>
      .pr-label {
        color: #000;
        padding: 0 7px;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        border: 1px solid transparent;
        border-radius: 2em;
      }
    </style>
    <span class="pr-label" style="background-color: ${color}">${name}</span>
  `;
}