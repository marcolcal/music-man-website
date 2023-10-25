<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $to = "marcolcal@gmail.com";
  $subject = "New form submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  
  if (mail($to, $subject, $body)) {
    echo "Message sent successfully!";
  } else {
    echo "Error: Message failed to send.";
  }
}
?>