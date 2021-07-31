import { getScores } from './request';
import clearInputs from './clear';

const render = () => {
  const scoresDiv = document.getElementsByClassName('scores')[0];
  scoresDiv.textContent = '';

  const createDiv = () => document.createElement('div');
  getScores().then((scores) => {
    scores.forEach((score, index) => {
      const isEven = (n) => n % 2 === 0;

      const scoreDiv = createDiv();
      scoreDiv.className = isEven(index) ? 'score' : 'score bg-grey';
      scoreDiv.textContent = `${score.user}: ${score.score}`;

      scoresDiv.appendChild(scoreDiv);

      clearInputs();
    });
  });
};

export default render;