const startScreen = document.getElementById("startScreen");
const characterScreen = document.getElementById("charScreen");

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
  var name_id = document.getElementById("name").value;
  var race_id = document.getElementById("races").value;
  var class_id = document.getElementById("classes").value;
  var level_id = document.getElementById("level").value;
  var startArea_id = document.getElementById("start-area").value;
  var lawAlign_id = document.getElementById("law-alignment").value;
  var goodAlign_id = document.getElementById("good-alignment").value;

  playerChar.name = name_id;
  playerChar.race = race_id;
  playerChar.class = class_id;
  playerChar.level = level_id;
  playerChar.hometown = startArea_id;
  playerChar.lawfulness = lawAlign_id;
  playerChar.goodness = goodAlign_id;
  console.log(playerChar);
  characterScreen.style.display = "block";
  startScreen.style.display = "none";
}

function main() {
  console.log("main works!");
  characterScreen.style.display = "none";
}

main();
