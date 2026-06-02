function createCharacter(name, level, health) {
    let characters = [{ name, level, health }];

    let charactersPowerUP = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });

    return {charactersPowerUP};
  };



const mario = createCharacter("Mario", 20, 100);   
const zelda = createCharacter("Zelda", 15, 400);   
const luigi = createCharacter("Luigi", 25, 350);

allCharacters = [...mario.charactersPowerUP, ...zelda.charactersPowerUP, ...luigi.charactersPowerUP];

const possibleWinners = allCharacters.filter(character => character.health > 1100);

console.log(possibleWinners);


function createLeaderboard(players) {
    const sorted = [...players].sort((a, b) => b.score - a.score);

    const medals = ["Gold", "Silver", "Bronze"];

    const leaderboard = sorted.map((player, index) => {
        const medal = medals[index] || ""; 
        const position = index + 1;
        return `${medal} ${position}. ${player.name} - ${player.score} pts`;
    });

    return leaderboard.join("\n");
}

const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phat", score: 500 }
];

console.log(createLeaderboard(players));