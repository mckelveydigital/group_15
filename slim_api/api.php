<?php
	
	// Allow cross domain access to this api.
	header("Access-Control-Allow-Origin: *");
	
	// Require the slim framework.
	require	'Slim/Slim.php';	
	
	// Register the autoloader.
	\Slim\Slim::registerAutoloader();
	
	// Use slim.
	use	Slim\Slim;
	
	// Declare $app as a new class of slim.
	$app = new Slim();
	
	// Url extension to get all teams, runs the getTeams() function.
	$app->get('/teams','getTeams');
	
	// Url extension to a specific team, runs the getClub(i) function.
	$app->get('/teams/:team_id/', function ($team_id) {
	    getClub($team_id);
	});
	
	// Url extension to get all players from a specific team, runs the getTeamPlayers(i) function.
	$app->get('/teams/:team_id/players', function ($team_id) {
	    getTeamPlayers($team_id);
	});
	
	// Url extension to add a player to the database, runs the addPlayer() function.
	$app->post('/players','addPlayer');
	
	// Url extension to return all matches, runs the getMatches() function.
	$app->get('/matches','getMatches');
	
	// Url extension to return the next upcoming match, runs the getNextMatch() function.
	$app->get('/matches/next','getNextMatch');

	//Url extension to return the matches and relevant data for the quarter final stage.
	$app->get('/matches/quarter-final', 'getQuarterFinal');
	
	//Url extension to return the matches and relevant data for the quarter final stage.
	$app->get('/matches/semi-final', 'getSemiFinal');
	
	//Url extension to return the matches and relevant data for the quarter final stage.
	$app->get('/matches/final', 'getFinal');

	$app->run();	
	
	// Function to get the database connection.
	function getConnection(){
		
		// Database, username and password details kept in an external file.
		require("connection.php");
		
		// Connect to the database.
		$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser, $dbpass);
		
		// Set attributes for error handling etc.
		$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
		// Return the connection.
		return $dbh;
		
	}
	
	// General function to return an error message.
	function getMessage() {
			
		echo "Error";
			
	}	
	
	// Function to return a json response
	function responseJson($responseBody, $statusCode){
		
		// Get an instance of slim and use it to set the response type to json.
		$app = Slim::getInstance();
		$response = $app->response();
		$response['Content-Type'] = 'application/json';
		$response->status($statusCode);
		$response->body($responseBody);
		
	}
	
	// Function to return all the matches in the database.
	function getMatches() {
		
		// SQL statement that queries the database for all matches.
		$sql = "select * FROM game ORDER BY date";
		
		try{
			
			// Connect to the database.
			$db = getConnection();
			
			// Run the SQL query.
			$stmt = $db->query($sql);
			
			// Get the data from the response and save it in a variable.
			$matches = $stmt->fetchAll(PDO::FETCH_OBJ);
			
			// Close the connection.
			$db = null;
			
			// Convert the response to json format and return it with a 200 success status code.
			responseJson($_GET['callback'] . '({"matches":'.json_encode($matches).'})', 200);	
	
		}catch(PDOException $e){
			
			// Handle errors by returning a json response with an error message and a status code of 500.
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}
		
	}

	// Function to return all of the matches in the quarter final and related data.
	function getQuarterFinal(){

		try{
			
			// Create an empty object to hold the match data
			$matches_holder = array();

			// Open the database connection.
			$db = getConnection();

			// SQL statement that queries the database for all matches.
			$sql = "select * FROM game ORDER BY date";

			// Run the SQL query.
			$stmt = $db->query($sql);
			
			// Get the data from the response and save it in a variable.
			$matches = $stmt->fetchAll(PDO::FETCH_OBJ);

			// Loop through all the returned matches.
			foreach($matches as $match){

				// Search for matches that are in the quarter final stage.
				if($match->stage === "Quarter Final - Leg 1" || $match->stage === "Quarter Final - Leg 2"){

					// Create some variables to hold the relevant IDs.
					$homeTeamId = $match->home_id;
					$awayTeamId = $match->away_id;
					$refId = $match->referee_id;
				
					// Get the stadium the match is played in using the home team's ID.
					$stadium_sql = "select * FROM stadium WHERE team_id='" . $homeTeamId ."'";
					
					$stmt2 = $db->query($stadium_sql);
					
					$stadium = $stmt2->fetchAll(PDO::FETCH_OBJ);

					// Get the home team from the database using the home team ID.
				    $sql3 = "select * FROM team WHERE id='" . $homeTeamId ."'";
					
					$stmt3 = $db->query($sql3);
					
					$homeTeam = $stmt3->fetchAll(PDO::FETCH_OBJ);
					
					// Get the away team from the database using the away team ID.
					$sql4 = "select * FROM team WHERE id='" . $awayTeamId ."'";
					
					$stmt4 = $db->query($sql4);
					
					$awayTeam = $stmt4->fetchAll(PDO::FETCH_OBJ);
					
					// Get the referee from the database using the referee ID.
					$refSql = "select * FROM referee WHERE id='" . $refId ."'";
					
					$stmt5 = $db->query($refSql);
					
					$referee = $stmt5->fetchAll(PDO::FETCH_OBJ);

					// Get the cards for this match from the database using the match ID.
					$cardSql = "select * FROM card WHERE game_id='" . $match->id ."'";
					
					$stmt6 = $db->query($cardSql);
					
					$cards = $stmt6->fetchAll(PDO::FETCH_OBJ);

					// Get the goals for this match from the database using the match ID.
					$goalSql = "select * FROM goal WHERE game_id='" . $match->id ."'";
					
					$stmt7 = $db->query($goalSql);
					
					$goals = $stmt7->fetchAll(PDO::FETCH_OBJ);

					$match_details = new stdClass();

					// Add all the returned data into an object called match details.
					$match_details->match = $match;
					$match_details->stadium = $stadium;
					$match_details->home_team = $homeTeam;
					$match_details->away_team = $awayTeam;
					$match_details->referee = $referee;
					$match_details->cards = $cards;
					$match_details->goals = $goals;

					// Add the current match details to an object contaning all quarter final matches details.
					array_push($matches_holder, $match_details);

				}

			}

			// Close the connection.
			$db = null;

			// Convert the response to json format and return it with a 200 success status code.
			responseJson($_GET['callback'] . '({"matches":'.json_encode($matches_holder).'})', 200);

		}catch(PDOException $e){
			
			// Handle errors by returning a json response with an error message and a status code of 500.
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}

	}
	
	function getSemiFinal(){
		
		try{
			
			// Create an empty object to hold the match data
			$matches_holder = array();

			// Open the database connection.
			$db = getConnection();

			// SQL statement that queries the database for all matches.
			$sql = "select * FROM game ORDER BY date";

			// Run the SQL query.
			$stmt = $db->query($sql);
			
			// Get the data from the response and save it in a variable.
			$matches = $stmt->fetchAll(PDO::FETCH_OBJ);

			// Loop through all the returned matches.
			foreach($matches as $match){

				// Search for matches that are in the quarter final stage.
				if($match->stage === "Semi Final - Leg 1" || $match->stage === "Semi Final - Leg 2"){

					// Create some variables to hold the relevant IDs.
					$homeTeamId = $match->home_id;
					$awayTeamId = $match->away_id;
					$refId = $match->referee_id;
				
					// Get the stadium the match is played in using the home team's ID.
					$stadium_sql = "select * FROM stadium WHERE team_id='" . $homeTeamId ."'";
					
					$stmt2 = $db->query($stadium_sql);
					
					$stadium = $stmt2->fetchAll(PDO::FETCH_OBJ);

					// Get the home team from the database using the home team ID.
				    $sql3 = "select * FROM team WHERE id='" . $homeTeamId ."'";
					
					$stmt3 = $db->query($sql3);
					
					$homeTeam = $stmt3->fetchAll(PDO::FETCH_OBJ);
					
					// Get the away team from the database using the away team ID.
					$sql4 = "select * FROM team WHERE id='" . $awayTeamId ."'";
					
					$stmt4 = $db->query($sql4);
					
					$awayTeam = $stmt4->fetchAll(PDO::FETCH_OBJ);
					
					// Get the referee from the database using the referee ID.
					$refSql = "select * FROM referee WHERE id='" . $refId ."'";
					
					$stmt5 = $db->query($refSql);
					
					$referee = $stmt5->fetchAll(PDO::FETCH_OBJ);

					// Get the cards for this match from the database using the match ID.
					$cardSql = "select * FROM card WHERE game_id='" . $match->id ."'";
					
					$stmt6 = $db->query($cardSql);
					
					$cards = $stmt6->fetchAll(PDO::FETCH_OBJ);

					// Get the goals for this match from the database using the match ID.
					$goalSql = "select * FROM goal WHERE game_id='" . $match->id ."'";
					
					$stmt7 = $db->query($goalSql);
					
					$goals = $stmt7->fetchAll(PDO::FETCH_OBJ);

					$match_details = new stdClass();

					// Add all the returned data into an object called match details.
					$match_details->match = $match;
					$match_details->stadium = $stadium;
					$match_details->home_team = $homeTeam;
					$match_details->away_team = $awayTeam;
					$match_details->referee = $referee;
					$match_details->cards = $cards;
					$match_details->goals = $goals;

					// Add the current match details to an object contaning all quarter final matches details.
					array_push($matches_holder, $match_details);

				}

			}

			// Close the connection.
			$db = null;

			// Convert the response to json format and return it with a 200 success status code.
			responseJson($_GET['callback'] . '({"matches":'.json_encode($matches_holder).'})', 200);

		}catch(PDOException $e){
			
			// Handle errors by returning a json response with an error message and a status code of 500.
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}
		
	}
	
	function getFinal(){
		
		try{
			
			// Create an empty object to hold the match data
			$matches_holder = array();

			// Open the database connection.
			$db = getConnection();

			// SQL statement that queries the database for all matches.
			$sql = "select * FROM game ORDER BY date";

			// Run the SQL query.
			$stmt = $db->query($sql);
			
			// Get the data from the response and save it in a variable.
			$matches = $stmt->fetchAll(PDO::FETCH_OBJ);

			// Loop through all the returned matches.
			foreach($matches as $match){

				// Search for matches that are in the quarter final stage.
				if($match->stage === "Final"){

					// Create some variables to hold the relevant IDs.
					$homeTeamId = $match->home_id;
					$awayTeamId = $match->away_id;
					$refId = $match->referee_id;
				
					// Get the stadium the match is played in using the home team's ID.
					$stadium_sql = "select * FROM stadium WHERE team_id='" . $homeTeamId ."'";
					
					$stmt2 = $db->query($stadium_sql);
					
					$stadium = $stmt2->fetchAll(PDO::FETCH_OBJ);

					// Get the home team from the database using the home team ID.
				    $sql3 = "select * FROM team WHERE id='" . $homeTeamId ."'";
					
					$stmt3 = $db->query($sql3);
					
					$homeTeam = $stmt3->fetchAll(PDO::FETCH_OBJ);
					
					// Get the away team from the database using the away team ID.
					$sql4 = "select * FROM team WHERE id='" . $awayTeamId ."'";
					
					$stmt4 = $db->query($sql4);
					
					$awayTeam = $stmt4->fetchAll(PDO::FETCH_OBJ);
					
					// Get the referee from the database using the referee ID.
					$refSql = "select * FROM referee WHERE id='" . $refId ."'";
					
					$stmt5 = $db->query($refSql);
					
					$referee = $stmt5->fetchAll(PDO::FETCH_OBJ);

					// Get the cards for this match from the database using the match ID.
					$cardSql = "select * FROM card WHERE game_id='" . $match->id ."'";
					
					$stmt6 = $db->query($cardSql);
					
					$cards = $stmt6->fetchAll(PDO::FETCH_OBJ);

					// Get the goals for this match from the database using the match ID.
					$goalSql = "select * FROM goal WHERE game_id='" . $match->id ."'";
					
					$stmt7 = $db->query($goalSql);
					
					$goals = $stmt7->fetchAll(PDO::FETCH_OBJ);

					$match_details = new stdClass();

					// Add all the returned data into an object called match details.
					$match_details->match = $match;
					$match_details->stadium = $stadium;
					$match_details->home_team = $homeTeam;
					$match_details->away_team = $awayTeam;
					$match_details->referee = $referee;
					$match_details->cards = $cards;
					$match_details->goals = $goals;

					// Add the current match details to an object contaning all quarter final matches details.
					array_push($matches_holder, $match_details);

				}

			}

			// Close the connection.
			$db = null;

			// Convert the response to json format and return it with a 200 success status code.
			responseJson($_GET['callback'] . '({"matches":'.json_encode($matches_holder).'})', 200);

		}catch(PDOException $e){
			
			// Handle errors by returning a json response with an error message and a status code of 500.
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}
		
	}
	
	// Function to return next match and all relevant match data from other tables.
	function getNextMatch(){
		
		try{
			
			// Open the database connection.
			$db = getConnection();
			
			// Query to get the next match from the current date.
			$sql = "select * FROM game WHERE `date` >= CURDATE() ORDER BY `date` LIMIT 1";
			
			$stmt = $db->query($sql);
			
			$match = $stmt->fetchAll(PDO::FETCH_OBJ);
			
			// Get the home team ID from the returned match data.
			$homeTeamId = $match[0]->home_id;
			
			// Get the away team ID from the returned match data.
			$awayTeamId = $match[0]->away_id;
			
			// Get the referee ID from the returned match data.
			$refId = $match[0]->referee_id;
			
			// Get the stadium the match is played in using the home team's ID.
			$stadium_sql = "select * FROM stadium WHERE team_id='" . $homeTeamId ."'";
			
			$stmt2 = $db->query($stadium_sql);
			
			$stadium = $stmt2->fetchAll(PDO::FETCH_OBJ);
			
			// Get the home team from the database using the home team ID.
		    $sql3 = "select * FROM team WHERE id='" . $homeTeamId ."'";
			
			$stmt3 = $db->query($sql3);
			
			$homeTeam = $stmt3->fetchAll(PDO::FETCH_OBJ);
			
			// Get the away team from the database using the away team ID.
			$sql4 = "select * FROM team WHERE id='" . $awayTeamId ."'";
			
			$stmt4 = $db->query($sql4);
			
			$awayTeam = $stmt4->fetchAll(PDO::FETCH_OBJ);
			
			// Get the referee from the database using the referee ID.
			$refSql = "select * FROM referee WHERE id='" . $refId ."'";
			
			$stmt5 = $db->query($refSql);
			
			$referee = $stmt5->fetchAll(PDO::FETCH_OBJ);
			
			$db = null;
			
			// Return a json object containing the match, home + away teams, stadium and referee data, with a status code of 200.
			responseJson($_GET['callback'] . '({"match":'.json_encode($match).',"stadium":'.json_encode($stadium).',"homeTeam":'.json_encode($homeTeam).',"awayTeam":'.json_encode($awayTeam).',"referee":'.json_encode($referee).'})', 200);		
		
		}catch(PDOException $e){
			
			// Handle errors by returning a json response with an error message and a status code of 500.
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}
				
	}
	
	// Function to return all the teams in the tournament.
	function getTeams() {
		
		// Query to return all the teams in the team table.
		$sql = "select * FROM team ORDER BY id";
		
		try{
			
			// Connect to the database.
			$db = getConnection();
			
			// Run the query.
			$stmt = $db->query($sql);
			
			// Store the returned data in a variable called teams.
			$teams = $stmt->fetchAll(PDO::FETCH_OBJ);
			
			// Close the database connection.
			$db = null;
			
			// Return the teams in a json response with a status code of 200.
			responseJson($_GET['callback'] . '({"team":'.json_encode($teams).'})', 200);	

		}catch(PDOException $e){
			
			// Handle errors by returning a json response with an error message and a status code of 500.
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}
		
	}
	
	// Function to return a specific team with all the relevant data from other tables.
	function getClub($team_id){
		
		try{
			
			// Connect to the database.
			$db = getConnection();
			
			// Query to select all the teams from the database that match the passed team ID.
			$sql = "select * FROM team WHERE id='" . $team_id ."'";
			
			$stmt = $db->query($sql);
			
			$team = $stmt->fetchAll(PDO::FETCH_OBJ);
			
			// Query to select the current team's stadium data from the database.
			$stadium_sql = "select * FROM stadium WHERE team_id=" . $team_id;
			
			$stmt2 = $db->query($stadium_sql);
			
			$stadium = $stmt2->fetchAll(PDO::FETCH_OBJ);
			
			// Query to select the current team's manager from the database.
		    $manager_sql = "select * FROM manager WHERE team_id=" . $team_id;
			
			$stmt3 = $db->query($manager_sql);
			
			$manager = $stmt3->fetchAll(PDO::FETCH_OBJ);
			
			// Query to select all of the current team's players from the database.
			$playersSql = "select * FROM player WHERE team_id=" . $team_id . " ORDER BY shirt_number";
			
			$stmt4 = $db->query($playersSql);
			
			$players = $stmt4->fetchAll(PDO::FETCH_OBJ);
			
			// Close the database connection.
			$db = null;
			
			// Return a json object with all the relevant team data with a status code of 200.
			responseJson($_GET['callback'] . '({"team":'.json_encode($team).',"stadium":'.json_encode($stadium).',"players":'.json_encode($players).',"manager":'.json_encode($manager).'})', 200);
		
		}catch(PDOException $e){
			
			// Handle errors by returning a json response with an error message and a status code of 500.
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}
				
	}
	
	// Function to add a player to the database.
	function addPlayer(){
		
		// Get the request attribute from slim api.
		$request = Slim::getInstance()->request();
		
		// Get the data passed from the form.
		$player = json_decode($request->getBody());
		
		// SQL query to insert new player into the database.
		$sql = "insert into player(first_name, last_name, date_of_birth, position, shirt_number, team_id) values (:first_name, :last_name, :date_of_birth, :position, :shirt_number, :team_id)";
		
		try{
			
			// Connect to the database.
			$db = getConnection();
			
			// Prepare the SQL query.
			$stmt = $db->prepare($sql);
			
			// Bind all the passed data to the query using slim.
			$stmt->bindParam("first_name", $player->first_name);
			$stmt->bindParam("last_name", $player->last_name);
			$stmt->bindParam("date_of_birth", $player->date_of_birth);
			$stmt->bindParam("position", $player->position);
			$stmt->bindParam("shirt_number", $player->shirt_number);
			$stmt->bindParam("team_id", $player->team_id);
			
			// Run the query.
			$stmt->execute();
			
			// Get the new player back from the database.
			$player->id = $db->lastInsertId();
			
			// Close the database connection.
			$db = null;
			
			// Return the new player in a json object with a status code of 201 for successful update.
			responseJson(json_encode($player), 201);
			
		}catch(PDOException $e){
			
			// Handle errors by returning a json response with an error message and a status code of 500.
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}
		
	}

?>	