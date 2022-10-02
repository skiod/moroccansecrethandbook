<?php 

function sanitize_my_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}

 
$captchaSiteKey = '6LdOG0siAAAAAGXuYRpYFNm0WzJ5CmfmNKPv6SRI';
$captchaSecretKey = '6LdOG0siAAAAAKgzN7EgCCm11nk4UeidnqnmWJ4r';
 
function curlRequest($url)
{
    $ch = curl_init();
    $getUrl = $url;
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_URL, $getUrl);
    curl_setopt($ch, CURLOPT_TIMEOUT, 80);
    
    $response = curl_exec($ch);
    return $response;
    
    curl_close($ch);
    
}
 

if(isset($_POST['submit'],$_POST['g-recaptcha-response']))
{
    $createGoogleUrl = 'https://www.google.com/recaptcha/api/siteverify?secret='.$captchaSecretKey.'&response='.$_POST['g-recaptcha-response'];
    $verifyRecaptcha = curlRequest($createGoogleUrl);
    $decodeGoogleResponse = json_decode($verifyRecaptcha,true);

    if($decodeGoogleResponse['success'] == 1){
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
    } else {
        echo 'invalid recaptcha';
    }
}
?>