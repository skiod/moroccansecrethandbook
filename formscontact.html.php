<?php 

function sanitize_my_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}
$to_email = 'info@moroccansecrethandbook.com';
$subject = 'Website Contact Form';
$message = "[name]:" . $_POST['name'] . ' [email]: ' . $_POST['email'] . ' [subject]: '. $_POST['subject'] . ' [message]:' . $_POST['message'];
$headers = 'From: noreply@moroccansecrethandbook.com';
//check if the email address is invalid $secure_check
$secure_check = sanitize_my_email($to_email);
if ($secure_check == false) {
    echo "Invalid input";
} else { //send email 
    mail($to_email, $subject, $message, $headers);
    echo 'OK';
}
?>