var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

output = "";
outputb = "";

// Start looping
for (var i = 0; i < loopCount; i += 1) {

  // Add the band names into the correct <div>
  currentBand = bands[i];
  console.log("currentBand", currentBand);

  output = output + "<div>"; // output = <div>
  console.log(output);
  output = output + currentBand; // output = <div>currentBand
  console.log(output);
  output = output + "</div>" // output = <div>currentBand</div>
  console.log(output);

  bandElement.innerHTML = output;

  // Add the veggie names into the correct <div>

  currentVeggie = vegetables[i];
  console.log("currentVeggie", currentVeggie);

  outputb = outputb + "<div>"; // output = <div>
  console.log(outputb);
  outputb = outputb + currentVeggie; // output = <div>currentVeggie
  console.log(outputb);
  outputb = outputb + "</div>" // output = <div>currentVeggie</div>
  console.log(outputb);

   veggieElement.innerHTML = outputb;
}









