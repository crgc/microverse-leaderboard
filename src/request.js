const gameId = 'yTswnMH2OFHzuRjtAJZe';
const base = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const addScore = async (name, score) => {
  const result = await fetch(`${base}games/${gameId}/scores/`, {
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
};

const getScores = async () => {
  const result = await fetch(`${base}games/${gameId}/scores/`)
    .then((response) => response.json());
  return result.result;
};

module.exports = {
  addScore,
  getScores,
};