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


function ConvertFormToJSON(form){
	
    var array = jQuery(form).serializeArray();
    
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}