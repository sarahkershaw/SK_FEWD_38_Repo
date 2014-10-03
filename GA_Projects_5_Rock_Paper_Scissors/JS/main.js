var stuff = ["apples", "oranges", "kumquats"];
//$.each(stuff, function (){})
//$.each(variable name, function(){})
// function in this eg is without a name. In JS functions are named so they can be called on elsewhere. In JQuery, 
//this is an anonymous function because it will be called immediately. 
//this function can therefore only be used once. It can only be called in this sequence. 
$.each(stuff/function(index,value){
 console.log(value.length);
})
//this will return a value of 0 for the index and "apples", 1 and "oranges", 2 and "kumpquats"


// JQuery - .val 
var fruit = "apples";
$("#food").val(fruit);

// The JS equivalent of this is document.getElementById('food'). text = fruit;


var fruit = "apples";
$(document).ready(function(){
$("#food").val(fruit);
});

//document.ready(function(){
//init()''
//})
//document - going to document, when it is ready, when everything has been loaded. 

function init() {
$.("#food").val(fruit);
}
// init is a common method name for when you are calling the application. 
//When document is ready, initialise the application so we know it's ready. 

