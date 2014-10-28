var imageOutcomes = [ "images/image_0_nocollection.jpg", "images/image_1_recyclingcollection.jpg", "images/image_2_regularcollectionblackwhitebags.jpg","images/image_3_collectionexception.jpg"];
var outcome;

//calling API function //
function getStatus(){
	$.ajax({
		type: "GET",
		url: "http://localhost:8000/api",
		dataType: "jsonp",
		success: function(data){
			console.log(data);
			displayImage(data);
		},
		error: function(error){
			alert ("something somewhere has gone wrong. If in doubt, revert to normal schedule");
			console.log(error);
		}
	});
}
// console.log(outcome);
$( document ).ready(function() {
    getStatus();
});

//functions to display image depending on API result and time and date of week //

function displayImage(data){
	var status = data["items"][0]["items"][1]["status"];
	var d = new Date();
	var day = d.getDay();
	var hour = d.getHours();
	//hour = 20;
	//day = 4;
	//status="ON SCHEDULE";

	var img=document.getElementById('apiResultImage');
	currentImage=imageOutcomes[0];
	img.setAttribute('src', currentImage); 
	statusMessage="No collection today, go outside, be free, explore the open city and all her possibilities"
	
	if (status != "ON SCHEDULE"){
		var img = document.getElementById('apiResultImage');
	    currentImage = imageOutcomes[3];
	    img.setAttribute('src',currentImage);
	    statusMessage = "Ah! Something somewhere has gone wrong. It's the Polar Vortex or that beast from Cloverfield is back in town. No collection today.";
	} else if ((day == 0 || day == 2) && (hour >= 17) && (hour <= 23)) {
		var img=document.getElementById('apiResultImage') 
		currentImage=imageOutcomes[2];
		img.setAttribute('src', currentImage);
		statusMessage="Normal trash collection, ready those black and white bags for collection tomorrow morning.";
	} else if ((day == 4) && (hour >= 17) && (hour <=23)) {
		var img=document.getElementById('apiResultImage')
		currentImage=imageOutcomes[1];
		img.setAttribute('src', currentImage);
		statusMessage = "Thundercats are go! Prepare your recycling bags, (neatly) folded cardboard and regular black or white rubbish bags. Put them all out for collection tomorrow morning"
	}
	 document.getElementById("apiResult").innerHTML=statusMessage;
};