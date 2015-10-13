var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");
var output = "";

for (var i = 0; i < reindeer.length; i++) {
	var currentReindeer = reindeer[i];
	var currentColor = colors[i];

// 'output' will build the line of code
	output = output + "<div>";  // output = <div>
	console.log(output);
	output = output + currentColor + " " + currentReindeer; // output = <div>currentColor currentReindeer
	console.log(output);
	output = output + "</div>"; // output = <div>currentColor currentReindeer</div>
}

console.log(output);

hohohoElement.innerHTML = output;

