let playerName = "Mario";
let currentLives = 3;

const level1 = 25;
const level2 = 30;
const level3 = 45;

function trungBinhCacLevel() {
  return (level1 + level2 + level3) / 3;
}

console.log(`Trung bình các level là: ${trungBinhCacLevel()}`);