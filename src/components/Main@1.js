import { html, render } from 'https://unpkg.com/lit-html?module';

import IMDInfoCard from '/src/components/IMDInfoCard@1.js'
import Button from '/src/components/Button@1.js'
import ArrowButton from '/src/components/ArrowButton@1.js'
import RepoCard from '/src/components/RepoCard@1.js'
import Switch from '/src/components/Switch@1.js'

import ReviewerCard from '/src/components/ReviewerCard@1.js'
import DateCard from '/src/components/DateCard@1.js'

const ReviewerCardList = () => {
  return html`
    ${ReviewerCard({})}
    ${ReviewerCard({})}
    ${ReviewerCard({})}
    ${ReviewerCard({})}
    ${ReviewerCard({})}
    ${ReviewerCard({})}
  `
}

const DateCardList = () => {
  return html`
    ${DateCard({})}
    ${DateCard({})}
    ${DateCard({})}
    ${DateCard({})}
    ${DateCard({})}
    ${DateCard({})}
  `
}

const repoBtnClick = (repoInfo) => {
  state.currentRepo = { ...repoInfo }
  const target = document.querySelector(".main__repo-card-container")
  const result = RepoCard({
    name: repoInfo.name,
    url: repoInfo.url,
    description: repoInfo.description
  })
  render(result, target);
}

const state = {
  repoList: [
    {
      "name": "Dev-Docs",
      "description": "내가 일주일간 공부하거나 알게된 내용을 공유하는 공간 📱",
      "updatedAt": "2020-11-22T07:18:38Z",
      "url": "https://github.com/im-d-team/Dev-Docs"
    },
    {
      "name": "Dev-Contents-House",
      "description": ":house: Dev-Contents-House",
      "updatedAt": "2020-11-21T02:33:26Z",
      "url": "https://github.com/im-d-team/Dev-Contents-House"
    },
    {
      "name": "Algorithm",
      "description": "🧩Let's study Alogrithm!",
      "updatedAt": "2020-11-18T07:06:35Z",
      "url": "https://github.com/im-d-team/Algorithm"
    }
  ],
  buttonList: ['User 정렬', 'Date 정렬'],
  currentRepo: {
    "name": "Dev-Docs",
    "description": "내가 일주일간 공부하거나 알게된 내용을 공유하는 공간 📱",
    "updatedAt": "2020-11-22T07:18:38Z",
    "url": "https://github.com/im-d-team/Dev-Docs"
  }
}

const Main = () => {
  const switchList = [ReviewerCardList, DateCardList]
  const changeCard = (idx) => { 
    const target = document.querySelector(".main_pr-list")
    render(switchList[idx](), target)
  }

  return html`
    <style>
      .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 600px;
        height: 100%;

        margin: 0 auto 50px;
      }

      .main__repo-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        margin-top: 32px;
      }

      .main__repo-card-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;

        margin-top: 32px;
      }

      .main__repo-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin: 0 12px;
      }

      .main__pr-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        margin-top: 60px;
      }

      .main_pr-list{
        width: 100%;
        height: 600px;

        margin-top: 30px;
        padding: 12px;

        overflow: auto;
        -ms-overflow-style: none;

        border-radius: 4px;
        box-sizing: border-box;
        /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2); */

        background: 
          linear-gradient(#fff 33%, rgba(249,206,192, 0)),
          linear-gradient(rgba(249,206,192, 0), #fff 66%) 0 100%,
          radial-gradient(farthest-side at 50% 0, rgba(34,34,34, 0.5), rgba(0,0,0,0)),
          radial-gradient(farthest-side at 50% 100%, rgba(34,34,34, 0.5), rgba(0,0,0,0)) 0 100%;
        background-color: #fff;
        background-repeat: no-repeat;
        background-attachment: local, local, scroll, scroll;
        background-size: 100% 45px, 100% 45px, 100% 15px, 100% 15px;
      }
    </style>

    <main class="main">
      ${IMDInfoCard()}
      <section class="main__repo-container">
        <!-- ${ArrowButton({ direction: 'left' })} -->
        <section class="main__repo-list">
          ${state.repoList.map((repo, idx) => {
            const styles = {}
            if (state.repoList.length - 1 !== idx) {
              styles['marginRight'] = '10px'
            }

            return Button({ text: repo.name, styles, callback: () => repoBtnClick(repo)})
          })}
        </section>
        <!-- ${ArrowButton({})} -->
      </section>

      <section class="main__repo-card-container">
        ${RepoCard({
          name: state.currentRepo.name,
          url: state.currentRepo.url,
          description: state.currentRepo.description
        })}
      </section>

      <section class="main__pr-container">
        ${Switch({buttonList: state.buttonList, callback: changeCard})}

        <section class="main_pr-list">
          ${ReviewerCardList()}
        </section>
      </section>
    </main>
  `
};

export default Main