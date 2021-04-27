let game1
const puzzleDIV = document.querySelector('#puzzle');
const remainingDIV = document.querySelector('#guesses');

window.addEventListener('keypress', (e) => {

    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render()
})

const render = () => {
    puzzleDIV.innerHTML = ''
    remainingDIV.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.className = "space"
        letterEl.textContent = letter
        puzzleDIV.appendChild(letterEl)
    })
}

const startGame = async () => {
    wordCount = document.getElementById('test5').value
    console.log(wordCount)
    const puzzle = await getPuzzle(wordCount)
    game1 = new Hangman(puzzle, 50)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()

