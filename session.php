<?php
	session_start();

	echo "server side = " . $_SESSION['unhashed_key'];
?>