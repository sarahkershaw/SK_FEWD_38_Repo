function buttonClick(color) {
  
  var orangeLight = document.getElementById("orange");
  var greenLight = document.getElementById("green");
  var redLight = document.getElementById("red");
  
  orangeLight.style.backgroundColor = "#3d3d3d";
  greenLight.style.backgroundColor="#3d3d3d";
  redLight.style.backgroundColor="#3d3d3d";
  
  var light = document.getElementById(color);
  light.style.backgroundColor = color;
}