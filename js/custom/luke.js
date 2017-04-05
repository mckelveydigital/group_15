$(document).on('click', '.match', function(){
	$(this).toggleClass("on");
});

$(document).on('change', '#team_select', function(){

	var theteam = $("#team_select").val();

	$("#edit_team_btn").attr("href","/admin/edit/" + theteam);
	
});