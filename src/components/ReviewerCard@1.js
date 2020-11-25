import { html } from 'https://unpkg.com/lit-html?module';

import NameTag from '/src/components/NameTag@1.js'
import PRCard from '/src/components/PRCard@1.js'

export default ({idx = 1, preList = []}) => {
  const prStyles = {
    marginBottom: '8px'
  }

  return html`
    <style>
      .user-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 600px;

        padding: 12px;
        margin-bottom: 12px;

        box-sizing: border-box;
        border-radius: 8px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      }

      .user-card__header{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        box-sizing: border-box;
      }

      .user-card__number{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 24px;
        height: 24px;

        border-radius:50%;
        border: 2px solid #000;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);

        font-size: 14px;
        font-weight: bold;
      }

      .user-card__user-image{
        width: 48px;
        height: 48px;

        margin-left: 12px;
        margin-right: 12px;

        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      }

      .user-card__main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;

        padding: 12px 12px 4px;
        box-sizing: border-box;
      }

      .user-card__name-card{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        width: 100%;

        padding: 8px 0 20px;
      }

      .user-card__name-card__text {
        padding: 4px 12px;

        border: none;
        border-radius: 25px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
        background-color: #f4ebc1;

        font-size: 16px;
        font-weight: bold;
        color: #000;
      }
    </style>
    <section class="user-card">
      <section class="user-card__header">
        <span class="user-card__number">${idx}</span>
        <img class="user-card__user-image" src="./assets/images/img-logo.png">
        ${NameTag({})}
      </section>
      <section class="user-card__main">
        <div class="user-card__name-card">
          <span class="user-card__name-card__text">미완료 PR</span>
        </div>
          ${PRCard({styles: prStyles})}
          ${PRCard({styles: prStyles})}
          ${PRCard({styles: prStyles})}
          ${PRCard({styles: prStyles})}
          ${PRCard({styles: prStyles})}
          ${PRCard({})}
      </section>
    </section>
  `;
}