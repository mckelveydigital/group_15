// Loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replaces the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '80%',
        width: '100%',
        videoId: 'K1CmMN1nRCE',
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          showinfo: 0,
          rel: 0
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
  }

function onPlayerReady(event){
    player.mute();
}

// 	$(document).ready(function(){

//       var thewebticker = $(document).find("#webticker");
//       console.log("this : " + thewebticker);
      
// 			$(thewebticker).webTicker({
// 			    height:'75px', 
// 			    duplicate:true, 
// 			    rssfrequency:0, 
// 			    startEmpty:false
// 			}); 

// 			$("#ease-financeticker").click(function(){
// 			    $("#webticker").webTicker('transition', 'ease');
// 			});

// 			$("#linear-financeticker").click(function(){
// 			    $("#webticker").webTicker('transition', 'linear');
// 			});
// });      
    
