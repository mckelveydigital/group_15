<?php
	require	'Slim/Slim.php';	
	
	\Slim\Slim::registerAutoloader();
		
	use	Slim\Slim;
	
	$app = new Slim();		
	$app->get('/teams','getTeams');
	$app->post('/teams','addTeam');
	$app->post('/players','addPlayer');
	$app->run();	
	
	function getConnection(){
		
		require("connection.php");
		$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser, $dbpass);
		$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $dbh;
		
	}
	
	function getMessage() {
			
		echo "Error";	
	}	
	
	function responseJson($responseBody, $statusCode){
		
		$app = Slim::getInstance();
		$response = $app->response();
		$response['Content-Type'] = 'application/json';
		$response->status($statusCode);
		$response->body($responseBody);
		
	}
	
	function responseHTML($responseBody, $statusCode){
		
		$app = Slim::getInstance();
		$response = $app->response();
		$response['Content-Type'] = 'application/html';
		$response->status($statusCode);
		$response->body($responseBody);
		
	}
	
	function getTeams() {
			
		$sql = "select * FROM team ORDER BY id";
		
		try{
			
			$db = getConnection();
			
			$stmt = $db->query($sql);
			
			$teams = $stmt->fetchAll(PDO::FETCH_OBJ);
			
			$db = null;
			
			responseJson('{"team":'.json_encode($teams).'}', 200);
			
		}catch(PDOException $e){
			
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}
		
	}
	
	function addTeam(){
		
		$request = Slim::getInstance()->request();
		
		$team = json_decode($request->getBody());
		
		$sql = "insert into team(name, established, description, league, mascot, logo_path) values (:name, :established, :description, :league, :mascot, :logo_path)";
		
		try{
			
			$db = getConnection();
			
			$stmt = $db->prepare($sql);
			
			$stmt->bindParam("name", $team->name);
			$stmt->bindParam("established", $team->est);
			$stmt->bindParam("description", $team->desc);
			$stmt->bindParam("league", $team->league);
			$stmt->bindParam("mascot", $team->mascot);
			$stmt->bindParam("logo_path", $team->logo_path);
			
			$stmt->execute();
			
			$team->id = $db->lastInsertId();
			
			$db = null;
			
			responseJson(json_encode($team), 201);
			
		}catch(PDOException $e){
		
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}
		
	}
	
	function addPlayer(){
		
		$request = Slim::getInstance()->request();
		
		$player = json_decode($request->getBody());
		
		$sql = "insert into player(first_name, last_name, date_of_birth, position, shirt_number, team_id) values (:first_name, :last_name, :date_of_birth, :position, :shirt_number, :team_id)";
		
		try{
			
			$db = getConnection();
			
			$stmt = $db->prepare($sql);
			
			$stmt->bindParam("first_name", $player->first_name);
			$stmt->bindParam("last_name", $player->last_name);
			$stmt->bindParam("date_of_birth", $player->date_of_birth);
			$stmt->bindParam("position", $player->position);
			$stmt->bindParam("shirt_number", $player->shirt_number);
			$stmt->bindParam("team_id", $player->team_id);
			
			$stmt->execute();
			
			$player->id = $db->lastInsertId();
			
			$db = null;
			
			responseJson(json_encode($player), 201);
			
		}catch(PDOException $e){
		
			responseJson('{"error":{"text":'.$e->getMessage().'}}', 500);
			
		}
		
	}


?>	