var channelName = 'elpulsodelarepublica';

$(document).ready(function() {
    $.get(
		"https://www.googleapis.com/youtube/v3/channels",{
			part: 'contentDetails',
			forUsername: channelName,
			key: 'AIzaSyCqc_C1VSrfgZuT5rXjvlxdp7Al0EyaZdk'},
			function(data){
				$.each(data.items, function(i, item){
					console.log(item);
					pid = item.contentDetails.relatedPlaylists.uploads;
					getVids (pid);
				})		
			}
	);
	
	function getVids(){
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
			part: 'snippet',
			maxResults: 50,
			playlistId: pid,
			key: 'AIzaSyCqc_C1VSrfgZuT5rXjvlxdp7Al0EyaZdk'},
			function(data){
				var output;
				$.each(data.items, function(i, item){
					console.log(item);
					videoimg = item.snippet.thumbnails.high.url; 
					videoTitle =  item.snippet.title;
					videoId = item.snippet.resourceId.videoId;
					
					videoThumbimg = '<pre><img id="thumb" src="' + videoimg + '" alt="No Image Available." style="width:100%;height:auto"></pre>';
					
					output = '<a href="viewer.html"><li>' + videoThumbimg + videoTitle + '<br></li><br><a>';
					
					$('#results').append(output);
					
					sessionStorage.setItem("VideoId", videoId)					
				})		
			}
	);
	}	
});