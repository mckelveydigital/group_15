<?php $base_url = "http://" . $_SERVER['HTTP_HOST']; ?>

<!DOCTYPE html>
<html>
<head>

<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Champions league</title>

<!-- Bootstrap -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"/>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

<!-- Link to compiled stylesheet -->
<link rel="stylesheet" href="css/style.css?random=<?php echo uniqid(); ?>"/>

</head>

<body>
	
<div id="home_top" class="top_image">
	
	<div class="top_image_inner">
		
		<a href="<?php echo $base_url . "/code/university/group_15/";?>">
			
			<img src="img/champions-league-logo.png" width="200px"/>
		
		</a>
		
	</div>
	
	<div id="menu_bar">
		
		<div class="menu_bar_inner">
				
			<a href="<?php echo $base_url . "/code/university/group_15/clubs"; ?>">Clubs</a>
			<a href="<?php echo $base_url . "/tournament"; ?>">Tournament</a>
			<a href="#"><i class="fa fa-search"></i></a>
		</div>
		
	</div>
	
</div>