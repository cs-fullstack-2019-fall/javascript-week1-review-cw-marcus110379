//Asks the user to enter 1 for 'count down' and 2 for 'count up'. Keep ask them them to do that until they enter 'q' to quit. If they enter 1, ask them what they want to count down to. Start from 0 and count down to that number by ones. If they enter 2, ask them what they want to count up to. Start from 0 and count up to the number by ones.

//var userInput = prompt("enter 1 for 'count down' and 2 for 'count up'");
while(parseInt(userInput) !== 1 && parseInt(userInput) !== 2 && userInput !== "q"){
    var userInput = prompt("enter 1 for 'count down' and 2 for 'count up' or q to quit");
}
if(parseInt(userInput) === 1) {
    userNum = prompt("what do you want to count down to");
    for (var i = 0; i >= userNum; i--) {
        console.log(i);

    }
}else if (parseInt(userInput) === 2) {
    userNum = parseInt(prompt("What do you want to can't up to"));
    for (var i = 0; i <= userNum; i++) {
        console.log(i);
    }
}



