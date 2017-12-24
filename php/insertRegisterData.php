<?php


  $serverName = "localhost";
  $userName = "user";
  $password = "user";
  $dbName = "angulardb";

  //Create Connection
  $conn = mysqli_connect($serverName, $userName, $password, $dbName);

  //Check Connection
  if(!$conn)
  {
    die("Connection Failed! ");
  }

  $sql = "insert into userdata (firstName, lastName, plz, place, address, eMail, phoneNumber, password)
  Values ('". $_POST['fName'] ."','". $_POST['lName'] ."','". $_POST['plz'] ."','
  ". $_POST['place'] ."','". $_POST['address'] ."','". $_POST['eMail'] ."','
  ". $_POST['phoneNumber'] ."','". $_POST['password'] ."')";

  if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

mysqli_close($conn);

 ?>
