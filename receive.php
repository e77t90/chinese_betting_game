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

		$_SESSION['a'] = [];
		array_push($_SESSION['a'], $text);

		return $hashedServerKey;
				
	}

	switch ($_POST['action']) {
		case 0:
			echo genHashedKey();
			break;
		case 1:
			echo end($_SESSION['a']); 
			break;
		
		default:
			break;
	}
?>