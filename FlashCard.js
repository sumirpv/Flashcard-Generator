var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

var inquirer = require("inquirer");
var basicCardQuestion = [];
basicCardQuestion.push(new BasicCard("Which Planet is  reclassified from a planet to a dwarf planet in 2006", "Pluto"));
basicCardQuestion.push(new BasicCard("How many stars are in the Milky WAy", "100 billion"));
basicCardQuestion.push(new BasicCard("Which Planet is nearest to the Earth", "Planet Mercury"));
basicCardQuestion.push(new BasicCard("What Planet is know as the Morning Star or the Evening Star", "Venus"));
basicCardQuestion.push(new BasicCard("Name the Planet that has 66 Moons", "Planet Jupiter"));
var clozeCardQuestion = [];
clozeCardQuestion.push(new ClozeCard("27 days is the Orbital period of the Moon", "27"));
clozeCardQuestion.push(new ClozeCard("Venus spins backwards relative to the others", "Venus"));
clozeCardQuestion.push(new ClozeCard("Yuri Gagarin was the first person to reach space", "Yuri Gagarin"));
clozeCardQuestion.push(new ClozeCard("Lunar eclipse occur when the Earth is between — the Sun and the Moon", "Lunar eclipse"));
clozeCardQuestion.push(new ClozeCard("Mars has approximately the same landmass as Earth", "Mars"));
playCard();
function playCard() {
    console.log();
    inquirer.prompt([
        {
            type: "list",
            message: "What type of card do you want to play ? \n",
            choices: ["Basic-Card", "Cloze-Card"],
            name: "card"
        }
    ]).then(function (data) {
        if (data.card === "Basic-Card") {
            console.log("\nGood choice: You get to see the front of the card it's a question , the back of the card is answer");
            console.log(" If you guessed the correct answer your score will increase, Lets start");
            basicCardFunction();
        }
        else {
            console.log("\nGood choice: You get a question with a '.....' , you get to fill the dots");
            console.log(" If you guessed the correct answer your score will increase, Lets start");
            clozeCardFunction();
        }
    })
}

var basicCount = 0;
var basicScore = 0;
function basicCardFunction() {
    if (basicCount < basicCardQuestion.length) {
        console.log("\nQuestion : ");
        console.log("\n" + basicCardQuestion[basicCount].front + "\n ");
        inquirer.prompt([
            {
                type: "input",
                message: "Answer",
                name: "userAnswer"
            }
        ]).then(function (user) {
            if (user.userAnswer === basicCardQuestion[basicCount].back) {
                console.log("*************************");
                console.log(" You are correct !!");
                console.log("*************************");
                basicCount++;
                basicScore++;
            } else {
                console.log("\nSorry wrong answer");
                console.log("===========================================");
                console.log("correct answer is " + basicCardQuestion[basicCount].back);
                console.log("===========================================");

                basicCount++;
            }
            basicCardFunction();
        })
    } else {
        console.log("\nGame Over Your Score is : " + basicScore);
        console.log("...............................");
        console.log();
        yesOrNO()
    }
}

var clozeCount = 0;
var clozeScore = 0;
function clozeCardFunction() {
    if (clozeCount < clozeCardQuestion.length) {
        console.log();
        console.log("Question : ");
        console.log();
        clozeCardQuestion[clozeCount].partial();
        console.log();
        inquirer.prompt([
            {
                type: "input",
                message: "Answer",
                name: "userAnswer"
            }
        ]).then(function (user) {
            if (user.userAnswer === clozeCardQuestion[clozeCount].cloze) {
                console.log("*******************************");
                console.log(" You are correct !!");
                console.log("*******************************");

                clozeCount++;
                clozeScore++;
            } else {
                console.log("\nSorry wrong answer");
                console.log("==================================================================================");
                console.log("correct answer is " + clozeCardQuestion[clozeCount].text);
                console.log("==================================================================================");
                clozeCount++;
            }
            clozeCardFunction();
        })
    } else {
        console.log("\n Game Over Your Score is : " + clozeScore);
        console.log("...............................");
        console.log();
        yesOrNO()
    }
}

function yesOrNO(){
    inquirer.prompt([
        {
            type:"confirm",
            message : "\nDo you want to play again Y/N",
            name :"confirm"
        }
    ]).then(function(response){
        if(response.confirm){
            console.log("\nYeah !!! Lets Start the game again");
            console.log(".....................................");

            playCard();
        }else{
            console.log("\nSee you later \n");
        }
    });
};




// var questions =[];

//     inquirer.prompt([
//         {
//             type : "input",
//             message : question1.partial,
//             name : "userAnswer"    
//         }
//     ]).then(function(answers){
//         if( answers.userAnswer === question1.cloze ){
//             console.log("correct answer");
//             question1.fullText();
//         }else{
//             console.log("Wrong answer, The correct Answer is:");
//             question1.fullText();
//         }
//     });



// //console.log(question);
// var questions =[];
// // function recrusioncall(){
//    // for( var i=0; i< question.length;i++){
//     inquirer.prompt([
//         {
//             message : question[0].text,
//             type : "input",
//             name : "userAnswer"    
//         }
//     ]).then(function(answers){
//         if( answers.userAnswer === question[0].cloze ){
//             console.log("correct answer");
//             question[0].fullText();
//         }else{
//             console.log("Wrong answer, The correct Answer is:");
//             question[0].fullText();
//         }
//     })
// // }
// //}
// //recrusioncall();









// console.log(firstPresidentCloze.text);
// console.log(firstPresidentCloze.cloze);
//firstPresidentCloze.partial();
//firstPresidentCloze.fullText();



// inquirer
// .prompt([
//     {
//         type : "input",
//         message :question1.cloze,
//         name : "userAnswer"
//     }
// ]).then(function(res){
//     console.log(res.userAnswer);
// })






//var firstPresidentCloze = new ClozeCard(
    //     "George Washington was the first president of the United States.", "George Washington");
    // // firstPresidentCloze.showCard( "George Washington was the first president of the United States.", "George Washington");

    // firstPresidentCloze.partial();
    // console.log(firstPresidentCloze.cloze);
    // firstPresidentCloze.fullText();