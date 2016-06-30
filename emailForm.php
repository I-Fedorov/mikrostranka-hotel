<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $phone = $_POST["phone"];
    $comment = $_POST["comment"];
    $mailBody = "Name: $name "
            . "\nSurname: $surname "
            . "\nPhone:$phone  "
            . "\nComment:$comment";

    mail("otellip@gmail.com", "reservation request", $mailBody);
}
?>