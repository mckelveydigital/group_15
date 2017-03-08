$(document).on('click', '#add_team_btn', function(e) {
	
	// Prevent the default form submit
	e.preventDefault();
	
	// Store the form ID in a variable
	var form = $("#add_team_form");
	var formData = ConvertFormToJSON(form);
	
	console.log(formData);
	
	// Begin AJAX call
	$.ajax({
		type: 'POST',
		url: "api.php/teams",
		dataType: "json",
		data: JSON.stringify(formData),
		success: function(data){
			
			// If successfull
			
			alert("Success");
			form.trigger("reset");
			console.log(data);

		}, 
		error: function(data){
			
			// If there was an error
			
			console.log(data.responseText);
			
		}
	});

});

$(document).on('click', '#add_player_btn', function(e) {
	
	// Prevent the default form submit
	e.preventDefault();
	
	// Store the form ID in a variable
	var form = $("#add_player_form");
	var formData = ConvertFormToJSON(form);
	
	console.log(formData);
	
	// Begin AJAX call
	$.ajax({
		type: 'POST',
		url: "api.php/players",
		dataType: "json",
		data: JSON.stringify(formData),
		success: function(data){
			
			// If successfull
			
			alert("Success");
			form.trigger("reset");
			console.log(data);

		}, 
		error: function(data){	
			
			// If there was an error
			
			console.log(data.responseText);
			
		}
	});

});


$(document).ready(function(){
	
	// AJAX call to return all teams
	$.ajax({
		type: 'GET',
		dataType: "json",
		url: "api.php/teams",
		success: function(data){
			
			// If the call was successful:
			// Set empty variabales to store data
			var name;
			var est;
			var league;
			var mascot;
			var desc;
			var results = ""; 
			var teamId;
			var logo_path;
			
			// Loop through each of the teams
			$.each(data.team, function(index, item) {   
				
				// Get the team attributes
				teamId = item.id;
				name = item.name;
				est = item.established;
				league = item.league;
			    mascot = item.mascot;
			    desc = item.description;
			    logo_path = item.logo_path;
			    
			    // Append an html string with each team's data creating a div for each team
			    results += '<div data-team="' + name + '" data-teamID="' + teamId + '" class="row team"><div class="col-md-1 team_badge"><img src="img/'+ logo_path +'.png" height="63px"/></div><div class="col-md-10 team_info"><p class="team_name">' + name + '</p><p class="team_league">' + league + '</p></div><div class="col-md-1 more"><div class="more_inner"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div></div></div>';
				
			});
			
			// Output the teams to screen					
			$("#all_teams").html(results);

		},
		error: function(){
			// If there is an error
			
			// Inform the user of the error
			console.log("There was an error");
			console.log(data.responseText);
			 
		}
	});
});

function ConvertFormToJSON(form){
	
    var array = jQuery(form).serializeArray();
    
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}