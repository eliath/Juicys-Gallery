<?php

function connectDB($callBack){
require 'db_credentials.php';
$dbcon = msqli_connect("mysql.juicysgallery.info", $USER_NAME, $PW, $DB_NAME);

if (mysqli_connect_errno()){
	echo "No db for u"
	return;
	}
else{
	echo "Connected!"
	return $callBack($dbcon);
	}
}

return connectDB(function closeCon($con){
	return msqli_close($con);
})

?>