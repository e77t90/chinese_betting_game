<?php
	session_start();

	function genHashedKey() {
		$text = "";
		$possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( $i=0; $i < 9; $i++ ){
		  $text = $text . $possible[rand(0,strlen($possible)-1)];
		}

		$unhashedServerKey = $text;
		$hashedServerKey = hash('sha512', $unhashedServerKey);

		$_SESSION['unhashed_key'] = $text;

		return $hashedServerKey;
				
	}

	switch ($_POST['action']) {
		case 0:
			echo genHashedKey();
			break;
		case 1:
			echo $_SESSION['unhashed_key']; 
			session_unset();
			break;
		
		default:
			break;
	}
?>