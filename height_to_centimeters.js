// var num1 = prompt("pick a number between 1 & 3");



// function myFirstFunction(){
// 	var cat = "lucy";
// 	for(var i = 0; i < 61; i++){
// 		console.log("You have drank " + i + "ammount of cold pressed juice!");
// 	}
// };

// function larry_function(){
// 	for(var i = 0; i < 3; i++){
// 		console.log("Hey you chose Larry's function");
// 	}
// }

// if( num1 === "1"){
// 	myFirstFunction();
// } else if (num1 === "2"){
// 	larry_function();
// } else {
// 	console.log("nice try buddy, try again...");
// }

// var x = ["Temor", "Shaz", "wumbo", "Clint"];

// for(var i = 0; i < 4; i++){
// 	console.log(x[i]);
// }

function rock_paper_scissors(){
	var clint = prompt("clint, rock, paper, scissors");
	var temor = prompt("temor, rock, paper, scissors");

	if (clint === temor) {
		console.log("it's a tie! Break it up you two!");
	} else if (clint === "rock") {
		if(temor === "scissors"){
			console.log("clint wins");
		} else if (temor === "paper") {
			console.log("temor wins");
		}	
	} else if (clint === "paper") {
		if(temor === "rock"){
			console.log("Clint wins!");
		} else if (temor === "scissors") {
			console.log("Temor wins!");
		}
	} else if (clint === "scissors") {
		if(temor === "paper"){
			console.log("Clint wins");
		} else if (temor === "rock") {
			console.log("Temor wins");
		}
	} 
	else {
		console.log("something broke");
	}
}

rock_paper_scissors();


function spongeBob(){
	for(var i = 0; i<50; i++){
		console.log("Are you ready kids?");
		console.log("aye aye captain");
	}
}


spongeBob();


























