<?php


$name = $_GET['name'];
$username = $_GET['username'];
$password = $_GET['password'];
$address = $_GET['address'];
$country = $_GET['country'];
$zipcode = $_GET['zipcode'];
$email = $_GET['email'];
$sex = $_GET['sex'];


if (empty($_GET["salad"]) == true) {

  echo "You choose nothing";
} else {

  echo "You chose:" . "<br>";
  for ($i = 0; $i < sizeof($_GET["language"]); $i++) {
    echo $_GET["language"][$i] . "<br>";
  }

}


echo $name;
echo $username;
echo $password;
echo $address;
echo $country;
echo $zipcode;
echo $email;
echo $sex;

?>