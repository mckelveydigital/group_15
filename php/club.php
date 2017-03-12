<?php
	
	$team_id = $_SESSION['team_id'];
	$team_name = $_SESSION['team_name'];
	$team_est = $_SESSION['team_est'];
    $team_desc = $_SESSION['team_desc'];
    $team_league = $_SESSION['team_league'];
    $team_mascot = $_SESSION['team_mascot'];
    $team_logo = $_SESSION['team_logo'];
	
	$stad_name = $_SESSION['stadium_name'];
    $stad_open = $_SESSION['stadium_date_opened'];
    $stad_cap = $_SESSION['stadium_capacity'];
    $stad_country = $_SESSION['stadium_country'];
    $stad_city = $_SESSION['stadium_city'];
    $stad_lat = $_SESSION['stadium_lat'];
    $stad_lng = $_SESSION['stadium_lng'];
			    
	$manager_first_name = $_SESSION['manager_first_name'];
    $manager_last_name = $_SESSION['manager_last_name'];
    $manager_dob = $_SESSION['manager_dob'];
			    
	require('php/phpheader.php'); 
	
?>

<input id="team_id" type="hidden" value="<?php echo $team_id; ?>"/>

<div class="<?php echo $team_logo; ?>">
	
	<div id="team_holder" class="jumbotron">
		
		<div class="container">
			
			<div id="team" class="row">
	
				<div class="col-md-8">
					
					<div class="row">
						<div class="col-md-2">
							
							<img src="../img/<?php echo $team_logo; ?>.png" width="100%"/>
							
						</div>
						<div class="col-md-10">
							
							<h1><?php echo $team_name; ?></h1>
							<h3><?php echo $team_league; ?></h3>
							<p>Mascot : <?php echo $team_mascot; ?></p>
						</div>
	
					</div>
					
					<div class="row">
							
						<div class="col-md-12">
							
							<p><?php echo $team_desc; ?></p>
							
						</div>
					
					</div>
					
				</div>
				
				<div class="col-md-4">
					
					<div class="row">
						
						<div class="col-md-12 text-right">
							
							<h3><?php echo $stad_name; ?></h3>
							
							<p>Capacity: <?php echo $stad_cap; ?></p>
							<p>Opened: <?php echo $stad_open; ?></p>
							<p>Location: <?php echo $stad_city; ?>, <?php echo $stad_country; ?></p>
							<h3>Manager</h3>
							<p><?php echo $manager_first_name . " " . $manager_last_name; ?></p>
						</div>
					
					</div>
					
				</div>
				
				<div id="map" class="col-md-12 margin-top"></div>
				
			</div>
		
		</div>
		
	</div>
	
	<div id="players_holder" class="jumbotron">
		
		<div class="container">
			
			<div class="row">
				
				<div class="col-md-12 margin-top">
							
					<div class="row">
						
						<div class="col-md-12">
							
							<h2>Players</h2>
							
						</div>
						
						<div id="team_players" class="row margin-top"></div>
						
					</div>
					
				</div>
		
			</div>
			
		</div>
		
	</div>

</div>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZMGjzr4C8q2cZthis7yRJbIUjip3KlAI&region=GB&language=en-gb&libraries=places"></script>

<?php require('php/phpscripts.php'); ?>

<script> initMap(<?php echo $stad_lat; ?>, <?php echo $stad_lng; ?>);</script>
<script> getPlayers(); </script>
<?php require('php/phpfooter.php'); ?>