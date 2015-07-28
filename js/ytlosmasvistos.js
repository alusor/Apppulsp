var channelName = 'elpulsodelarepublica';
var channelID= 'UCK0_zBeybLuyXbOcHp7wmJA';

$(document).ready(function() {
    $.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet',
			maxResults: 50,
			q: 'el+pulso+de+la+republica',
			type: 'video',
			order: 'viewCount',
			channelId: channelID,
			key: 'AIzaSyCqc_C1VSrfgZuT5rXjvlxdp7Al0EyaZdk'},
			function(data){
				var output;
				$.each(data.items, function(i, item){
					console.log(item);
					videoimg = item.snippet.thumbnails.high.url; 
					videoTitle =  item.snippet.title;
					videoId = item.id.videoId;
					
					videoThumbimg = '<img src="' + videoimg + '" alt="No Image Available.">';
					
					//output = '<a href="viewer.html#' +videoId+'"><li>' + videoThumbimg + videoTitle + '<br></li><br><a>';
					card = '<div class="card"> <div class="card-image"><a href="viewer.html#'+videoId+'">'+videoThumbimg+'</a></div><div class="card-content"><span class="card-title black-text"><a href="viewer.html#'+videoId+'">'+videoTitle+'</a></div></div> </div>';
					$('#getVideos').append(card);
				})		
			}
	);
	
});