window.onload = function() {
    var VideoID = window.location.href.split('#')[1];
    //alert("Video " + VideoID);
	document.getElementById("VideoFrame").innerHTML='<iframe src="https://www.youtube.com/embed/'+VideoID+'" style="border: 0; position:absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%">Sin Acceso a Internet</iframe>'; 
};