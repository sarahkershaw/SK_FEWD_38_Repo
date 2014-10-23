alert("Hudson rules the house");
var imageOutcomes = [ "images/image_0_nocollection.jpg", "images/image_1_recyclingcollection.jpg", "images/image_2_regulartrashblackwhitebags.jpg","images/image_3_collectionexception.jpg"];

//calling API function //

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
	var img=document.getElementById('apiResultImage');
	img.setAttribute('src',images[imageOutcomes]);
	currentImage=imageOutcomes[0];
	status="no collection today, go outside, be free, explore the open city and all her possibilities"
	
	if (outcome!="on schedule"){
	var img=document.getElementById('apiResultImage');
    img.setAttribute('src',images[imageOutcomes]);
    currentImage=imageOptions;
    status="Ah! Something has gone wrong. Polar Vortex or that beast from Cloverfield is back in town. No collection today!";
};

	else if (outcome=="on schedule" day== "Sunday" or "Tuesday" AND
	time <5 >24) {
	var img=document.getElementById('apiResultImage') 
	img.setAttribute('src',images[imageOutcomes]);
	status="Normal trash collection, black and white bags for collection tomorrow morning.";
};
	
	else (outcome=="on schedule" day=="Thursday" AND
	time= <5 >24) ) {
	var img=document.getElementById('apiResultImage')
	img.setAttribute('src'=images[imageOutcomes]);
	status="Thundercats are go! Recycling bags, (neatly) folded cardboard and regular black or white rubbish bags. It is a trash jackpot! All out for collection tomorrow morning"
}
	 document.getElementById("apiResult").innerHTML=status;
});