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