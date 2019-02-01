<?php

if (empty($_SERVER["HTTP_ACCEPT_LANGUAGE"])) {
	$language = "en";
}
else
{
	$language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
}


if ((isset($_GET["lang"]) AND $_GET["lang"] == "en") OR (isset($_GET["en"]))) {
    $language="en";
}
elseif ((isset($_GET["lang"]) AND $_GET["lang"] == "es") OR (isset($_GET["es"]))) {
    $language="es";
}

switch ($language){
    case "es":
        include("index_es.html");
        break;
    case "en":
        include("index_en.html");
        break;
    default:
        include("index_en.html");
        break;
}
?> 
