<?php

$serverName = "localhost";
$userName = "user";
$password = "user";
$dbName = "angulardb";

//Create Connection
$conn = mysqli_connect($serverName, $userName, $password, $dbName);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "select * from userdata where eMail like '".$_POST['loginEMail']."' and password like '".$_POST['loginPassword']."';";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
      echo 1; //1 Logged in
    }
} else {
  echo 0; //0 wrong Log in
}

mysqli_close($conn);

 ?>
