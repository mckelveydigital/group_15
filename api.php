<?php
	require	'Slim/Slim.php';	
	
	\Slim\Slim::registerAutoloader();
		
	use	Slim\Slim;
	
	$app = new Slim();		
	$app->get('/teams','getTeams');	
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


?>	