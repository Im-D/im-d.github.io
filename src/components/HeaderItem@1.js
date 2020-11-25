import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map.js?module';

export default ({ name, size = 24, styles = {}, data = '' }) => html`
  <section class="header-item" style="${styleMap(styles)}">
    <style>
      .header-item{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        cursor: pointer;
      }
      .header-item__icon { 
        width: ${size}px;
        height: ${size}px;
        cursor: pointer;
      }
      .header-item__text{
        font-size: 14px;
        margin-left: 4px;
      }
    </style> 

    <object 
      id="${name}" 
      class="header-item__icon" 
      data="./assets/icons/${name}.svg" 
      type="image/svg+xml">
    </object>
    <span class="header-item__text">${data}</span>
  </section>
`;
