$(document).on('click', '.match', function(){
	$(this).toggleClass("on");
});

$(document).on('change', '#team_select', function(){

	var theteam = $("#team_select").val();

	$("#edit_team_btn").attr("href","/admin/edit/" + theteam);
	
});

window.fbAsyncInit = function() {
FB.init({
  appId      : '1282394385202069',
  xfbml      : true,
  version    : 'v2.8'
});
FB.AppEvents.logPageView();
  FB.api(
  '/uefachampionsleague/feed?access_token=EAACEdEose0cBAP3gkPOcFhPVFBbRa7AnZAZCg9R6ZAZCgYiM1iv0EU14dfyOzoUHQoIgYFrzZCTguATN0U85IEBJVOgeYk3nmMwzIg9MeHhUzWD0hxZAbMgZC3kSfcZBpYCEJuZALAL1S7DevFrYj2NK8TksxUS4wspjv2uwOm3ss1baDa8S2MWORxnDeNtESiFAZD',
  'GET',
  {"limit":"10"},
  function(response) {
      // Insert your code here
      console.log(response.data[0].message);
     
    //  $(document).find("#fb_message_0").html(response.data[0].message);
    //  $(document).find("#fb_message_1").html(response.data[1].message);
    //  $(document).find("#fb_message_2").html(response.data[2].message);
    //  $(document).find("#fb_message_3").html(response.data[3].message);
    //  $(document).find("#fb_message_4").html(response.data[4].message);
    //  $(document).find("#fb_message_5").html(response.data[5].message);
  }
);

};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));