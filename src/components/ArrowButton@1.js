import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map.js?module';

export default ({ size = 16, styles = {}, direction = "right" }) => {
  return html`
    <style>
      .imd-arrow-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 6px;

        border: 2px solid #000;
        border-radius: 50%;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
        background-color: #fff;

        cursor: pointer;
      }

      .imd-arrow-button:hover {
        opacity: 0.7;
      }

      .imd-arrow-button__icon{
        width: ${size}px;
        height: ${size}px;
      }

      .right{
        transform: rotate(0deg)
      }

      .bottom{
        transform: rotate(90deg)
      }

      .left{
        transform: rotate(180deg)
      }

      .top{
        transform: rotate(270deg)
      }
    </style>
    <button class="imd-arrow-button" style="${styleMap(styles)}">
      <object 
        class="imd-arrow-button__icon ${direction}"
        data="./assets/icons/straight-right-arrow.svg" 
        type="image/svg+xml">
      </object>
    </button>
  `;
}