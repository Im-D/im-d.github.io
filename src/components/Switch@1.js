import { html } from 'https://unpkg.com/lit-html?module';

export default ({buttonList = [], callback = () => {}}) => {
  const selectMenu = (idx = 0) => {
    const selecteArea = document.querySelector(".switch__selected-area")
    selecteArea.style.cssText = `transform: translateX(${100 * idx - 50}%) translateY(-10%);`
    callback(idx)
  }

  return html`
    <style>
      .switch {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        position: relative;

        padding: 12px 20px;

        border: none;
        border-radius: 25px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        background-color: #fff;
      }

      .switch__item-text {
        width: 100px;
        margin-right: 12px;
        text-align: center;

        cursor: pointer;
      }

      .switch__item-text.last {
        margin-right: 0px;
      }

      .switch__selected-area{
        position: absolute;
        transform: translateX(-50%) translateY(-10%);
        transition: transform 0.5s;

        border-radius: 25px;
        background-color: rgba(112, 159, 176, 0.3);
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
        width: 110px;
        height: 25px;
      }
    </style>
    <section class="switch">
      ${buttonList.map((item, idx) => {
        const isLast = buttonList.length - 1 === idx ? "last" : "" 
        return html`
        <span class="switch__item-text ${isLast}" @click=${() => selectMenu(idx)}>
          ${item}
        </span>`
      })}
      <div class="switch__selected-area"></div>
    </section>
  `;
}