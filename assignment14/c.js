
let numberOfPlayers = parseInt(prompt("Enter the number of players:"));
let players = [];

for (let i = 0; i < numberOfPlayers; i++) {
    let name = prompt(`Enter the name of player ${i + 1}:`);
    let score = parseInt(prompt(`Enter the score for ${name}:`));
    players.push({ name: name, score: score });
}


players.sort((a, b) => {
    if (b.score === a.score) {
        return a.name.localeCompare(b.name);
    }
    return b.score - a.score;
});


document.write("<h2>Players:</h2>");


for(let i =0; i<numberOfPlayers; i++){
    document.write(`<li>${players[i].name}: ${players[i].score}</li>`);

}

