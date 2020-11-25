import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map.js?module';

export default ({ text = 'button name', styles = {}, callback = () => {} }) => {
  return html`
    <style>
      .imd-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 6px 12px;

        border: none;
        border-radius: 4px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
        background-color: #726a95;

        font-size: 16px;
        color: #fff;

        cursor: pointer;
      }

      .imd-button:hover {
        opacity: 0.7;
      }
    </style>
    <button class="imd-button" style="${styleMap(styles)}" @click=${callback}>
      <span>${text}</span>
    </button>
  `;
}