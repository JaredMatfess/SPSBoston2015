<script type='text/javascript'>

	var trafficCopJS = trafficCopJS || {};

	trafficCopJS.GetParameterByName = function getParameterByName(name) {
	  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	    results = regex.exec(location.search);
	  var finalString = (results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")));
	  return finalString;
	};

	trafficCopJS.Referrer = trafficCopJS.GetParameterByName("Source");
	trafficCopJS.Actor = trafficCopJS.GetParameterByName("Actor");
	
	//Grabs the source URL and strips from the last / and before the . of the .aspx
	trafficCopJS.Referrer = trafficCopJS.Referrer.substring(trafficCopJS.Referrer.lastIndexOf('/') + 1, trafficCopJS.Referrer.lastIndexOf('.'));
	trafficCopJS.BaseURL = location.href;
	
	if(!trafficCopJS.Actor){
	
	switch(trafficCopJS.Referrer) {
		case ("home"):
		window.location.href = trafficCopJS.BaseURL + "&Actor=Requestor";
		break;
		
		case ("Intake-Assigners"):
		window.location.href = trafficCopJS.BaseURL + "&Actor=IntakeAssigner";
		break;
		
		case ("Leaders"):
		window.location.href = trafficCopJS.BaseURL + "&Actor=Leadership";
		break;

	}
	
  }

</script>
