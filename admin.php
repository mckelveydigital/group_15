<?php require('php/admin_header.php'); ?>
	
	<div class="jumbotron">
		
		<div class="container">
			
			<div class="row">
				
				<div class="col-md-6">
					
					<div class="col-md-12">
						
						<h2>Add A Team</h2>
					
					</div>
					
					<div class="col-md-12">
						
						<form action="/teams" method="post" id="add_team_form" class="form">
							
							<div class="col-md-12 form-row">
								<label for="name">Team Name</label>
								<input class="form-control" name="name" id="name" type="text" placeholder="Team Name"/>
							</div>
							
							<div class="col-md-12 form-row">
								<label for="est">Established</label>
								<input class="form-control" name="est" id="est" type="date"/>	
							</div>
							
							<div class="col-md-12 form-row">	
								<label for="league">League</label>			
								<input class="form-control" name="league" id="league" type="text" placeholder="League Name"/>
							</div>
							
							<div class="col-md-12 form-row">
								<label for="mascot">Mascot Name</label>
								<input class="form-control" name="mascot" id="mascot" type="text" placeholder="Mascot Name"/>
							</div>
							
							<div class="col-md-12 form-row">
								<label for="logo_path">Logo Path</label>
								<input class="form-control" name="logo_path" id="logo_path" type="text" placeholder="Logo Path"/>
							</div>
							
							<div class="col-md-12 form-row">
								<label for="desc">Description</label>
								<textarea class="form-control" name="desc" id="desc" type="text" placeholder="Description"></textarea>
							</div>
							
							<div class="col-md-12 form-row">
								<button type="submit" id="add_team_btn" class="btn btn-primary">Submit</button>
							</div>
							
						</form>
					
					</div>
				
				</div>
				
				<div class="col-md-6">
				
					<div class="col-md-12">
						
						<h2>Add A Player</h2>
					
					</div>
					
					<div class="col-md-12">
						
						<form action="/players" method="post" id="add_player_form" class="form">
							
							<div class="col-md-12 form-row">
								<label for="first_name">First Name</label>
								<input class="form-control" name="first_name" id="first_name" type="text" placeholder="First Name"/>
							</div>
							
							<div class="col-md-12 form-row">
								<label for="last_name">Last Name</label>
								<input class="form-control" name="last_name" id="last_name" type="text" placeholder="Last Name"/>
							</div>
							
							<div class="col-md-12 form-row">
								<label for="date_of_birth">Date of Birth</label>
								<input class="form-control" name="date_of_birth" id="date_of_birth" type="date"/>	
							</div>
							
							<div class="col-md-12 form-row">	
								<label for="position">Position</label>			
								<input class="form-control" name="position" id="position" type="text" placeholder="Position"/>
							</div>
							
							<div class="col-md-12 form-row">
								<label for="shirt_number">Shirt Number</label>
								<input class="form-control" name="shirt_number" id="shirt_number" type="number" value="01"/>
							</div>
							
							<div class="col-md-12 form-row">
								<label for="team">Team</label>
								
								<select id="team_id" class="form-control" name="team_id">
									
									<option value="1">Manchester United</option>
									<option value="2">Manchester City</option>
									
								</select>
								
							</div>
							
							<div class="col-md-12 form-row">
								<button type="submit" id="add_player_btn" class="btn btn-primary">Submit</button>
							</div>
							
						</form>
					
					</div>
				
				</div>
				
			</div>
			
		</div>
		
	</div>
	
<?php require('php/admin_footer.php'); ?>