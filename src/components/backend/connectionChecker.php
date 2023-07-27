<?php

if ($_POST['action'] == "check") {
    if ($_POST['engine'] == "mysql") {
        $conn = new mysqli($_POST['servername'], $_POST['username'], $_POST['password']);
        if ($conn->connect_error) {
            echo "Connection failed: " . $conn->connect_error;
        } else {
            echo true;
        }
    } else {
        echo "Error, database engine not supported yet.";
    }
}
?>