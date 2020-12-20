<?php
header('Access-Control-Allow-Origin: *');
$json_auth_user = "";
$json_auth_ad2021 = "";
$url = "http://161.139.68.247/ttms/web_man_webservice_json.cgi?";
$session_id=$_REQUEST['session_id'];

$file = fopen($url . "entity=authentication&session_id=" . $session_id, "r");

if ($file) {
    while (!feof($file)) {
        $line = fgets ($file, 1024);
        $json_auth_user .= $line;
    }
    
    fclose($file);
}

if ($json_auth_user != "") {
    $file2 = fopen($url . "entity=authentication&login=ad2021&password=scsx3104", "r");
    if ($file2) {
        while (!feof($file2)) {
            $line = fgets ($file2, 1024);
            $json_auth_ad2021 .= $line;
        }

        fclose($file2);
        echo $json_auth_ad2021;
    }
}
?>