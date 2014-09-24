function buttonClick(color) {
  
  var orange=document.getElementById("orangeLight");
  var green=document.getElementById("goLight");
  var red=document.getElementById("stopLight");
  
  orange.style.backgroundColor="#3d3d3d";
  green.style.backgroundColor="#3d3d3d";
  red.style.backgroundColor="#3d3d3d";
  
  var light=document.getElementById(color);
  light.style.backgroundColor = color;
}