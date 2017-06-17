<?php
session_cache_limiter('nocache');
header('Expires: ' . gmdate('r', 0));

header('Content-type: application/json');

require 'php-mailer/class.phpmailer.php';

// Your email address
$to = 'sidj242@gmail.com';

$subject = 'Request a Quote';

if($to) {

	$name = $_POST['name'];
	$email = $_POST['email'];
	
	$fields = array(
		0 => array(
			'text' => 'Name',
			'val' => $_POST['name']
		),
		1 => array(
			'text' => 'Email address',
			'val' => $_POST['email']
		),
		2 => array(
			'text' => 'Message',
			'val' => $_POST['message']
		),
		3 => array(
			'text' => 'Institute',
			'val' => $_POST['insti']
		),
		
		4 => array(
			'text' => 'Product Code',
			'val' => $_POST['product']
		),
		
		5 => array(
			'text' => 'Phone',
			'val' => $_POST['phone']
		)
	);
	
	$message = "";
	
	foreach($fields as $field) {
		$message .= $field['text'].": " . htmlspecialchars($field['val'], ENT_QUOTES) . "<br>\n";
	}
	
	$mail = new PHPMailer;

	$mail->IsSMTP();                                      // Set mailer to use SMTP
	
	// Optional Settings
	//$mail->Host = 'mail.yourserver.com';				  // Specify main and backup server
	//$mail->SMTPAuth = true;                             // Enable SMTP authentication
	//$mail->Username = 'username';             		  // SMTP username
	//$mail->Password = 'secret';                         // SMTP password
	//$mail->SMTPSecure = 'tls';                          // Enable encryption, 'ssl' also accepted

	$mail->From = $email;
	$mail->FromName = $_POST['name'];
	$mail->AddAddress($to);								  // Add a recipient
	$mail->AddReplyTo($email, $name);

	$mail->IsHTML(true);                                  // Set email format to HTML
	
	$mail->CharSet = 'UTF-8';

	$mail->Subject = $subject;
	$mail->Body    = $message;

	if(!$mail->Send()) {
	   $arrResult = array ('response'=>'error');
	}

	$arrResult = array ('response'=>'success');

	echo json_encode($arrResult);
	
} else {

	$arrResult = array ('response'=>'error');
	echo json_encode($arrResult);

}
?>