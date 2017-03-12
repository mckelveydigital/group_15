<?php require('php/header.php'); ?>

<div id="all_teams_holder" class="jumbotron">
	
	<div class="container">
		
		<div class="row">
			
			<div class="col-md-12">
				
				<h3>All Teams</h3>
				
				<p>Click on a team to find out more about them.</p>
				
			</div>
			
		</div>
		
	</div>
	
	<div class="container">
		
		<div id="all_teams" class="row"></div>
	
	</div>
	
</div>
<?php require('php/scripts.php'); ?>
<script>getClubs();</script>
<?php require('php/footer.php'); ?>