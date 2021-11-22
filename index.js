var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("Heya! What's your name? ")

console.log("Good to meet you " + userName + "!")
var idAns = readlineSync.question("Do you know Invictus? ")

if (idAns === "yes"){
  console.log("Great! Let's see how much you know me eh (￣▽￣)ノ")
} else if (idAns === "no") {
  console.log("Oh don't worry, you can get to know me by this brief questionnaire (^０^)ノ")
} else {
  console.log("Uhhh that's a weird answer but anyways... (・_・;)")
} 
console.log("");


// play function
function play(question, answer){
  var userAns = readlineSync.question(question);

  if (userAns.toLowerCase() === answer){
    console.log("Right you are!");
    score = score + 1;
  } else {
    console.log("Nah wrong :(");
  }

  console.log("Current score: ", score);
  console.log("---------------")

}

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "mayapur"
}, {
  question: "How old am I? ",
  answer: "22"
}, {
  question: "What's my favourite food? ",
  answer: "pasta"
}, {
  question: "What do I like doing in my leisure time? ",
  answer: "art"
}, {
  question: "Okay... Do I watch Anime? ",
  answer: "yes"
}, {
  question: "And my favorite anime would be? ",
  answer: "violet evergarden"
}, {
  question: "Tell me the best game I played so far --> ",
  answer: "witcher 3"
}, {
  question: "What kind of games do I not play much? ",
  answer: "fps"
}, {
  question: "My most frequent YouTube channel that I listen songs from would be? ",
  answer: "eve"
}, {
  question: "Tell me my birthday <(￣︶￣)> ",
  answer: "30 july"
}];

// loop
for (var i = 0; i < questions.length; i++) {
  currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Not Bad 彡(-ω-；)彡 you scored: ", score)