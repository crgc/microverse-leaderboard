import clearInputs from './clear';

export default class Display {
  constructor(request) {
    this.request = request;
  }

  render() {
    const scoresDiv = document.getElementsByClassName('scores')[0];
    scoresDiv.textContent = '';

    const createDiv = () => document.createElement('div');
    this.request.getScores().then((scores) => {
      scores.forEach((score, index) => {
        const isEven = (n) => n % 2 === 0;

        const scoreDiv = createDiv();
        scoreDiv.className = isEven(index) ? 'score' : 'score bg-grey';
        scoreDiv.textContent = `${score.user}: ${score.score}`;

        scoresDiv.appendChild(scoreDiv);

        clearInputs();
      });
    });
  }
}