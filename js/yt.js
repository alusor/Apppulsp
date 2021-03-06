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
					videoTitleWhiot  = videoTitle.replace("#","-");
					videoThumbimg = '<img src="' + videoimg + '" alt="No Image Available.">';
					youtubeurl= 'https://youtube.com/watch?v='+videoId;
					twitterurl = 'http://twitter.com/intent/tweet?text='+videoTitle+" "+youtubeurl+"- Via el Pulso"+"&lang=es";
					facebookurl = "http://www.facebook.com/dialog/feed?app_id=559107320883310&link="+youtubeurl+"&name="+videoTitleWhiot+"&picture="+videoimg+"&redirect_uri=https://facebook.com/";
					
					cardtitle= '<a href="viewer.html#'+videoId+'">'+videoTitle+'</a>';
					cardButtons= '<div><br><b> </b><a href="'+facebookurl+'" target="_blank"><img class="icon" src="images/fb.png" height=30></a>  <a href="'+twitterurl+'" target="_blank"><img class="icon" src="images/tt.png" height=30></a></div>';
					tableContent = '<table><tbody><tr><td>'+cardtitle+'</td><td>'+cardButtons+'</td></tr></tbody></table>';
					//output = '<a href="viewer.html#' +videoId+'"><li>' + videoThumbimg + videoTitle + '<br></li><br><a>';
					card = '<div class="card"> <div class="card-image"><a href="viewer.html#'+videoId+'">'+videoThumbimg+'</a></div><div class="card-content"><span>'+tableContent+'</div></div> </div>';
					$('#getVideos').append(card);
				})		
			}
	);
	}	
});

