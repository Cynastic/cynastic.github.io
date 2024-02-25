let score = 0;
let lines = [];

fetch('https://cynastic.github.io/StarWarsEpisode4.txt')
.then(response => response.text())
.then(text => {
  lines = text.split('\n').filter(line => line !== "");
})
.catch(error => {
  console.error(error);
});

function getNextLine()
{
  score++;
  document.getElementById('score').innerHTML = score;
  document.getElementById('levelText').innerHTML = lines[score];
}