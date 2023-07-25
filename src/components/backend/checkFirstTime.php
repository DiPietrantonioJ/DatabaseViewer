<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_POST['action'] == "checkFirstTime") {
    if (is_file("mainHandler.php")) {
        echo false;
    } else {
        echo true;
    }
}

if ($_POST['action'] == "firstConfig") {
    if (is_file("mainHandler.php")) {
        echo "Error, this isn't the first run.";
    } else {
        $template = "";
        if ($_POST['engine'] == "mysql") {
            $template = './templates/mysqlTemplate.php';
        }
        if ($template != "") {
            $path = 'mainHandler.php';
            $templateContent = file_get_contents($template);
            $templateContent = str_replace('{{USER}}', $_POST['user'], $templateContent);
            $templateContent = str_replace('{{SERVER}}', $_POST['server'], $templateContent);
            $templateContent = str_replace('{{PASSWORD}}', $_POST['password'], $templateContent);
            $templateContent = str_replace('{{DATABASE}}', $_POST['database'], $templateContent);
            $templateContent = str_replace('{{TABLE}}', $_POST['table'], $templateContent);

            $file = fopen($path, 'w+');
            if (!$file) {
                die('Error creating the file ' . $path);
            }
            fwrite($file, $templateContent);
            fclose($file);
        } else {
            echo "Unexpected engine.";
        }
    }
}
?>