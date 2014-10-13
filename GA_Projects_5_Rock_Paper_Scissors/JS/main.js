var userWins = ["rockscissors", "paperrock", "scissorspaper"];
var outComeMsg = "Hulk Smash! You loose.";

function userChoice(choice){
    evaluate(choice);
}

var hulkChoice = Math.random();

if (hulkChoice < 0.34) {
    hulkChoice = "rock";
} else if (hulkChoice <= 0.67 >= 0.35) {
    hulkChoice = "paper";
} else {
    hulkChoice = "scissors";
}


function evaluate(userPick) {
    if (userPick == hulkChoice) {
    outComeMsg="it's a tie! He may not relish this...";
    } else {
    var outCome = userPick + hulkChoice;

        $.each(userWins, function (index, value) {
        if (outCome == value) {
            outComeMsg="You win, but Hulk might get angry. Run.";
        }
    });
    }
    alert(outComeMsg);
}

  /*I tried to add the following line of code to line 21: alert("Hulk has picked "+ hulkChoice);
  however this then caused the game to stop each time. I'd have to reload the page to play again. 
  My original intention had been to show the hulk's choice, either by making the corresponding hulk button change 
  upon being selected (sort of like a reverse onclick) or, failing that, just with an alert, as indicated in this comment. 
  As the alert seemed to break the code, I nixed it, but I'd love to find out how to do this. */