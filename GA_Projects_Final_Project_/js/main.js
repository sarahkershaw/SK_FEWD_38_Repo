alert("Hudson rules the house");
var imageOutcomes = [ "images/image_0_nocollection.jpg", "images/image_1_recyclingcollection.jpg", "images/image_2_regulartrashblackwhitebags.jpg","images/image_3_collectionexception.jpg"];

//calling API function //

function get311Data(){
$.ajax({
method:"GET",
url:("https:api.cityofnewyork.us/311/v1/municipalservices?app_id=0114b4dd&app_key=ee16c5f7409497e6b342df2fd061df24?details=&status"),
success:function(data){
$("$outcome").html(data.outcome);
}
}
});

error:function(error){
 alert ("something somewhere has gone wrong. If in doubt, revert to normal schedule");
};

//functions to display image depending on API result and time and date of week //

function displayImage(imageOptions){
	document.getElementById('apiResultImage');
	img.src="images/image_0_nocollection.jpg";
	status="no collection today, go outside, be free, explore the open city and all her possibilities"
	
	if (outcome!="on schedule")
	document.getElementById('apiImageResult');
    src="images/image_3_collectionexception.jpg"
    status="Ah! Polar Vortex or that beast from Cloverfield is back in town. No collection today!";
};

	else if (outcome=="on schedule" day== "Sunday" or "Tuesday" AND
	time <5 >24) {
	document.getElementById('apiResultImage') 
	src=images/image_2_regulartrashblackwhitebags.jpg">
	status="Normal trash collection, black and white bags";
};
	
	else (outcome=="on schedule" day=="Thursday" AND
	time= <5 >24) ) {
	document.getElementById('apiResultImage')
	src="images/image_1_recyclingcollection.jpg">;
	status="Thundercats are go! Recycling bags, (neatly) folded cardboard and regular black or white rubbish bags. It is a trash jackpot!"
}
	 document.getElementById("apiResult").innerHTML=status;
});