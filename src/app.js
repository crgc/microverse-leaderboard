import render from './display';
import { addScore } from './request';
import clearInputs from './clear';

const renderDisplay = () => {
  const submitBtn = document.getElementById('submit-btn');
  const refreshBtn = document.getElementById('refresh-btn');

  submitBtn.addEventListener('click', () => {
    const inputName = document.getElementsByClassName('input-name')[0];
    const inputScore = document.getElementsByClassName('input-score')[0];

    addScore(inputName.value, inputScore.value).then(() => clearInputs());
  });

  refreshBtn.addEventListener('click', () => {
    render();
  });

  render();
};

const start = () => {
  renderDisplay();
};

export default start;