<?php 

	$dbhost ="149.156.115.209";
	$dbuser="s414154";
	$dspass="rada ruizluis";
	$dbname="s414154";

	$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

	if(!$conn){
		die("No connection:".mysqli_connect_error());
	}

	$name=$_POST['name_register'];
	$mail=$_POST['user_register'];
	$user=$_POST['mail_register'];
	$password=$_POST['password_register'];

	$query=mysql_query($conn,"SELECT * FROM login WHERE user = '".$name."'and password= '".$password."'");
	$nr = mysqli_num_rows($query);

 ?>	