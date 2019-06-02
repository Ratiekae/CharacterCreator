const startScreen = document.getElementById("startScreen");
const characterScreen = document.getElementById("charScreen");

const nameChar = document.getElementById("name-char");
const raceChar = document.getElementById("race-char");
const classChar = document.getElementById("class-char");
const levelChar = document.getElementById("level-char");
const hometownChar = document.getElementById("hometown-char");
const lawChar = document.getElementById("lawfulness-char");
const goodChar = document.getElementById("goodness-char");



var playerChar = {
  name: "",
  race: "",
  class: "",
  level: 1,
  hometown: "",
  lawfulness: "",
  goodness: ""
};

function characterCreate() {
  
  playerChar.name = document.getElementById("name").value;
  playerChar.race = document.getElementById("races").value;
  playerChar.class = document.getElementById("classes").value;
  playerChar.level = document.getElementById("level").value;
  playerChar.hometown = document.getElementById("start-area").value;
  playerChar.lawfulness = document.getElementById("law-alignment").value;
  playerChar.goodness = document.getElementById("good-alignment").value;

/*
  playerChar.name = name_id;
  playerChar.race = race_id;
  playerChar.class = class_id;
  playerChar.level = level_id;
  playerChar.hometown = startArea_id;
  playerChar.lawfulness = lawAlign_id;
  playerChar.goodness = goodAlign_id;*/
  console.log(playerChar);
  characterScreen.style.display = "block";
  startScreen.style.display = "none";
  generateCharSheet();
}


function generateCharSheet (){
  nameChar.innerHTML = playerChar.name;
  raceChar.innerHTML = playerChar.race;
  classChar.innerHTML = playerChar.class;
  levelChar.innerHTML = playerChar.level;
  hometownChar.innerHTML = playerChar.hometown;
  lawChar.innerHTML = playerChar.lawfulness;
  goodChar.innerHTML = playerChar.goodness;
}

function main() {
  console.log("main works!");
  characterScreen.style.display = "none";
}

main();
