let h = 0;
let currentText = 'this will be interesting.';
let lines = [];

fetch('https://cynastic.github.io/StarWarsEpisode4.txt')
  .then(response => response.text())
  .then(text => {
    // Log the text to the console
    lines = text.split('\n').filter(line => line !== "");
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });

function doSomething()
{
    h += 1;
    document.getElementById('score').innerHTML = h;

    document.getElementById('levelText').innerHTML = lines[h];
}

function revealLevel(currentLevel)
{
    switch(currentLevel)
    {
        case 1:
            currentText = 'Wow, You Started';
        break;
        case 2:
            currentText = 'Hello There.';
        break;
        case 3:
            currentText = 'General Kenobi.';
        break;
    }
    document.getElementById('levelText').innerHTML = currentText;
}