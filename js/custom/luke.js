$(document).on('click', '.match', function(){
	$(this).toggleClass("on");
});

$(document).on('change', '#team_select', function(){

	var theteam = $("#team_select").val();
	
	var theteamname = $("#team_select option[value='"+theteam+"']").text();

	$("#header_team_name").html(theteamname);

	$("#edit_team_btn").attr("href","/admin/edit/" + theteam);

});

$(document).on('click', '#team_edit', function(){

  $("#header_team_name").html("Edit Team");
  offSidebar();
  $(this).addClass("on");

});

$(document).on('click', '#stadium_edit', function(){

  $("#header_team_name").html("Edit Stadium");
  offSidebar();
  $(this).addClass("on");

});

$(document).on('click', '#manager_edit', function(){

  $("#header_team_name").html("Edit Manager");
  offSidebar();
  $(this).addClass("on");

});

$(document).on('click', '#players_edit', function(){

  $("#header_team_name").html("Edit Players");
  offSidebar();
  $(this).addClass("on");

});

function offSidebar(){

  $(".sidebar-option").each(function(){
    $(this).removeClass("on");
  });

}

window.fbAsyncInit = function() {
FB.init({
  appId      : '1282394385202069',
  xfbml      : true,
  version    : 'v2.8'
});
FB.AppEvents.logPageView();
  FB.api(
  '/uefachampionsleague/photos?access_token=EAACEdEose0cBALUQOYtnyMR3U1zJItdBpROA6VF1Whab3VcatkKynsykoge0yYkIxNdxWAa1k5pk5WCZAZCSLZCywEYrl6e0BUvQjUVkdxJH6LO8M8xPVtZAVrWEXiiJUqZAZARLGhvjluZAzQ9ZBj5PiyUJQMjNJVYOuRL1ZCqAchHVYZAxxGweaUfjFXCXPSH3AZD',
  'GET',
  {"limit":"10"},
  function(response) {
      // Insert your code here
<<<<<<< HEAD
      console.log(response.data[0].message);
     
    //  $(document).find("#fb_message_0").html(response.data[0].message);
    //  $(document).find("#fb_message_1").html(response.data[1].message);
    //  $(document).find("#fb_message_2").html(response.data[2].message);
    //  $(document).find("#fb_message_3").html(response.data[3].message);
    //  $(document).find("#fb_message_4").html(response.data[4].message);
    //  $(document).find("#fb_message_5").html(response.data[5].message);
=======
      console.log(response);
     
     $(document).find("#fb_message_0").html(response.data[0]);
     $(document).find("#fb_message_1").html(response.data[1]);
     $(document).find("#fb_message_2").html(response.data[2]);
>>>>>>> remotes/origin/admin-feature
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