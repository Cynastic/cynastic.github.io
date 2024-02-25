let h = 0;
let currentText = 'this will be interesting.';

fetch('StarWarsEpisode4.txt')
  .then(response => response.text())
  .then(text => {
    // Log the text to the console
    console.log(text);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });

function doSomething()
{
    h += 1;
    document.getElementById('score').innerHTML = h;

    revealLevel(h / 10);
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