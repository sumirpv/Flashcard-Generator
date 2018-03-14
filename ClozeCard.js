var BasicCard = require("./BasicCard.js");

function ClozeCard(text,cloze){
    this.text = text;
    this.cloze = cloze;
    //this.partial=(this.text).replace(this.cloze,"...");
    this.partial = function(){
        console.log((this.text).replace(this.cloze,"..."));
        if( ((this.text).indexOf(this.cloze)) === -1){
            console.log("Error because '"+ this.cloze+ "' doesn't appear in '"+this.text+"' sentence");
        }
     };
    this.fullText = function(){
        console.log((this.text));
        //console.log((this.cloze)+(this.text));
    };
};


 //   var brokenCloze = new ClozeCard("This doesn't work", "oops");
  // console.log(brokenCloze.text);
    // console.log(brokenCloze.cloze);
    //brokenCloze.partial();
    //brokenCloze.fullText();
    // var firstPresidentCloze = new ClozeCard(
    //     "George Washington was the first president of the United States.", "George Washington");


    //     firstPresidentCloze.showCard("wehertw","wrw");
    //     firstPresidentCloze.showCard("wehertw","wrw");
    //     firstPresidentCloze.showCard("wehertw","wrw");
    //     firstPresidentCloze.showCard("wehertw","wrw");

    //console.log(firstPresidentCloze.card);
    // console.log(firstPresidentCloze.cardCount());
    // firstPresidentCloze.partial;






module.exports = ClozeCard;