<?php
if(isset($_POST['email'])) {

    $email_to = "michael.s.k1001@gmail.com";

    $firstname = $_POST['firstname']; // required
    $lastname = $_POST['lastname']; // required
    $email_from = $_POST['email']; // required
    $email_subject = $_POST['subject']; // not required
    $comments = $_POST['message']; // required

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message = "";
    $email_message .= "You've received a new message from your personal website! \n";
    $email_message .= "Name: ".clean_string($firstname) . " " . clean_string($lastname)."\n";
    $email_message .= "Message: \n ".clean_string($comments)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
header('Location: success.html');

}

?>
