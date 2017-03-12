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

function getPlayers(){
		
	// Get the team ID
	var team_id = $("#team_id").val();
	
	// AJAX call to return all players from that club
	$.ajax({
		type: 'GET',
		dataType: "json",
		url: "../api.php/teams/" + team_id + "/players",
		success: function(data){
			
			// If the call was successful:
			// Set empty variabales to store data
			var player_id;
			var first_name;
			var last_name;
			var dob;
			var position;
			var shirt_num;
			var country;
			var results = ""; 
							
			// Loop through each of the teams
			$.each(data.players, function(index, item) {   
				
				// Get the team attributes
				player_id = item.id;
				first_name = item.first_name;
				last_name = item.last_name;
				dob = item.date_of_birth;
			    position = item.position;
			    shirt_num = item.shirt_number;
			    country = item.nationality;
			    
			    // Append an html string with each team's data creating a div for each team
			    results += '<div data-player="' + player_id + '" class="col-md-3 player"><div class="player_inner"><div class="col-md-12 player_number"><svg class="player_shirt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.13 275.09"><defs><style>.cls-1{font-size:112px;fill:#fff;font-family:Myriad Pro;}</style></defs><title>shirt</title><path d="M289.83,223.83c3.09,0.62,8.72,4.22,10.52,6.7a115.32,115.32,0,0,1,7.54,11.09c5.23,9.25,10,18.77,15.27,28,8.2,14.37,16.67,28.58,25,42.86,0.4,0.69.83,1.37,1.24,2.05,2.29,3.83,1.6,4.39-3.45,9.92-11,8.88-23.55,14.9-37,19a22.27,22.27,0,0,1-4.24.69,4.25,4.25,0,0,1-4.49-2.46c-3.35-5.91-6.82-11.75-10.29-17.6-1.43-2.4-3-4.75-4.47-7.1a18.14,18.14,0,0,0-1.43-1.66c-0.18,1.06-.36,1.74-0.39,2.44-0.37,7.43-.83,14.85-1,22.28-0.42,15.43-.8,30.86-1,46.29-0.28,18.63-.32,37.27.48,55.89q0.73,17.22,2.2,34.41c2.67,8.19,1.66,12.44-4.85,15A42.16,42.16,0,0,1,268.23,494c-10.6,1-21.24,1-31.88.95-21.52,0-43,0-64.55-.13-7.1-.05-14.24-0.25-21.22-1.81a31.81,31.81,0,0,1-7-2.4c-3.21-1.57-4.57-4.36-4.07-7.94s1.3-7.41,1.62-11.14c0.74-8.84,1.59-17.69,1.82-26.55,0.43-16.47.69-32.95,0.58-49.42-0.14-19.91-.7-39.82-1.16-59.72-0.13-5.67-.53-11.34-0.84-17-0.07-1.28-.36-2.54-0.46-3.82-0.88,1.35.11,1.28,0,0-0.88,1.35-1.91,2.62-2.74,4q-6.52,10.91-13,21.86c-2,3.36-3.15,3.91-7.06,3.16a64.53,64.53,0,0,1-14-4.81c-7.46-3.31-14.8-6.85-21.36-11.78a72.9,72.9,0,0,1-5.76-5.06,13.7,13.7,0,0,1-1.76-2.26,4.16,4.16,0,0,1,0-5.09c4.19-6.71,8.24-13.52,12.34-20.28,9.28-15.32,17.48-31.25,26-47,2.67-4.91,5.75-9.59,8.72-14.33a28.85,28.85,0,0,1,2.86-3.54,10.91,10.91,0,0,1,6.32-3.59c10.51-2.1,10.51-2.1,25.47-5a202,202,0,0,1,26.36.51c9.09,1,16.67,3.26,26.67,3.25a148.7,148.7,0,0,0,30.58-3c6.77-1.5,4.72-.48,17.25-1.5,10.5-.85,5.5-0.85,16.37-0.22" transform="translate(-74.54 -219.83)"/><text class="cls-1 player_number" transform="translate(135 117.12)" text-anchor="middle">' + shirt_num + '</text></svg></div><div class="col-md-12 player_info"><p class="player_name">' + first_name + ' ' + last_name + '</p><p class="player_position">' + position + '</p></div></div></div>';
				
			});
			
			// Output the teams to screen					
			$("#team_players").html(results);

		},
		error: function(){
			// If there is an error
			
			// Inform the user of the error
			console.log("There was an error");
			console.log(data.responseJson);
			 
		}
	});

}
function getClubs(){
			
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
			    results += '<div data-team="' + name + '" data-teamID="' + teamId + '" class="col-md-4 team"><div class="team_inner"><div class="col-md-12 team_badge"><img src="img/'+ logo_path +'.png" height="63px"/></div><div class="col-md-12 team_info"><p class="team_name">' + name + '</p><p class="team_league">' + league + '</p></div><div class="col-md-12 more"><div class="more_inner"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></div></div></div></div>';
				
			});
			
			// Output the teams to screen					
			$("#all_teams").html(results);

		},
		error: function(){
			// If there is an error
			
			// Inform the user of the error
			console.log("There was an error");
			console.log(data.responseJson);
			 
		}
	});
	
}



var baseUrl = document.location.origin;

$(document).on('click', '.team', function(e) {
	
	var team_name = $(this).attr("data-team");
	
	team_name = team_name.replace(/\s+/g, '_')
	
	window.location.href = "http://localhost:8888/code/university/group_15/clubs/" + team_name;
	// 	window.location.href = baseUrl + "/clubs/" + team_name;
});
function ConvertFormToJSON(form){
	
    var array = jQuery(form).serializeArray();
    
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}

function initMap(lat, lng) {
	
	var stadium = {lat: lat, lng: lng};
		
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: stadium,
		scrollwheel: false,
		scaleControl: false,
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false
	});
	
	// Create a custom marker image
	var marker_image = {
		url: '../img/stadium.png',
		size: new google.maps.Size(80, 126),
		anchor: new google.maps.Point(40, 63),
		origin: new google.maps.Point(-40, 0),
		scaledSize: new google.maps.Size(40, 63)
	};
	
	// Add a marker to the map showing where the user is located
    var marker = new google.maps.Marker({
      position: stadium,
      draggable:false,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: marker_image,
      title: "Stadium"
    });
		
	map.set('styles', [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]);
	
}