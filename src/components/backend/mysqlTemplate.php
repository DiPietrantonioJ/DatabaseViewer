<?php

$servername = "{{SERVER}}";
$username = "{{USER}}";
$password = "{{PASSWORD}}";
$dbname = "{{DATABASE}}";
$table = "{{TABLE}}";

function getTableDescription($table)
{
    global $servername, $username, $password, $dbname;

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8mb4", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("DESCRIBE $table");
        $stmt->execute();
        $columnas = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $description = array();

        foreach ($columnas as $columna) {
            $description[] = array(
                "name" => $columna['Field'],
                "type" => $columna['Type'],
                "max" => getMaxChar($columna['Type'])
            );
        }

        return $description;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    $conn = null;
}

function getMaxChar($type)
{
    preg_match("/^(\w+)(\((\d+)\))?/", $type, $matches);

    if (isset($matches[3])) {
        return $matches[3];
    }

    return null;
}

function getTableData($table)
{
    global $servername, $username, $password, $dbname;

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8mb4", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("SELECT * FROM $table");
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $data;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    $conn = null;
}

$description = getTableDescription($table);
$data = getTableData($table);

$response['table'] = $description;
$response['data'] = $data;

echo json_encode($response, JSON_PRETTY_PRINT);
?>
