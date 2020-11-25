import { html } from 'https://unpkg.com/lit-html?module';

export default () => {
  return html`
    <style>
      .imd-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 600px;
        height: 100px;
        
        margin: 30px auto 0;
        padding: 0 12px;

        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      }
    </style>
    <section class="imd-info">
      <h1>IMD Info</h1>
    </section>
  `;
}