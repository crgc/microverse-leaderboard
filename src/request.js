export default class Request {
  constructor(gameId) {
    this.gameId = gameId;
    this.base = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  }

  async addScore(name, score) {
    const result = await fetch(`${this.base}games/${this.gameId}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
    return (result.result === 'Leaderboard score created correctly.');
  }

  async getScores() {
    const result = await fetch(`${this.base}games/${this.gameId}/scores/`)
      .then((response) => response.json());
    return result.result;
  }
}
