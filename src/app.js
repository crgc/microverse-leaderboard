import Display from './display';
import Request from './request';
import clearInputs from './clear';

export default class App {
  constructor() {
    this.request = new Request('yTswnMH2OFHzuRjtAJZe');
    this.display = new Display(this.request);
  }

  renderDisplay() {
    const submitBtn = document.getElementById('submit-btn');
    const refreshBtn = document.getElementById('refresh-btn');

    submitBtn.addEventListener('click', () => {
      const inputName = document.getElementsByClassName('input-name')[0];
      const inputScore = document.getElementsByClassName('input-score')[0];

      this.request.addScore(inputName.value, inputScore.value).then(() => clearInputs());
    });

    refreshBtn.addEventListener('click', () => {
      this.display.render();
    });

    this.display.render();
  }

  start() {
    this.renderDisplay();
  }
}