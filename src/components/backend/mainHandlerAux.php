<?php

$user = $_POST['username'];
$password = $_POST['password'];

//default admin password: vrVNqez#2j*EDxc5
//default admin password MD5: 68ce99c4b0c5759047b8a705ebd8041c

if ($user == "admin" && md5($password, false) == "68ce99c4b0c5759047b8a705ebd8041c") {
    
    $auxDatabase->displayName = "";
    $auxDatabase->handlerUrl = "";

    $databaseArray = array($auxDatabase);

    $userData->displayName = "Administrator";

    $brandData->brandName = "";
    $brandData->brandImg = "";

    $data['databases'] = $databaseArray;
    $data['user'] = $userData;
    $data['brand'] = $brandData;

    $json = json_encode($data);
    echo $json;
} else {
    echo "error";
}

?>