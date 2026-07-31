<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid Request"
    ]);
    exit;
}

// Get Form Data
$name    = trim($_POST['name'] ?? '');
$phone   = trim($_POST['phone'] ?? '');
$email   = trim($_POST['email'] ?? '');
$country = trim($_POST['country'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validate
if (empty($name) || empty($phone) || empty($email) || empty($country)) {
    echo json_encode([
        "status" => "error",
        "message" => "Please fill all required fields."
    ]);
    exit;
}

$mail = new PHPMailer(true);

try {

    // ==========================
    // SMTP SETTINGS
    // ==========================
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'amirthavalliwebdeveloper2018@gmail.com';
    $mail->Password   = 'ytem wgxo dybx wbxs'; // Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->CharSet = 'UTF-8';

    // ==========================
    // MAIL SETTINGS
    // ==========================
    $mail->setFrom('amirthavalliwebdeveloper2018@gmail.com', 'Website');
    $mail->addAddress('amirthavalliwebdeveloper2018@gmail.com');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);

    $mail->Subject = "New Consultation Booking";

    $mail->Body = "
    <h2>New Consultation Request</h2>

    <table border='1' cellpadding='10' cellspacing='0' width='600'>
        <tr>
            <td><strong>Full Name</strong></td>
            <td>{$name}</td>
        </tr>

        <tr>
            <td><strong>Mobile Number</strong></td>
            <td>{$phone}</td>
        </tr>

        <tr>
            <td><strong>Email Address</strong></td>
            <td>{$email}</td>
        </tr>

        <tr>
            <td><strong>Country</strong></td>
            <td>{$country}</td>
        </tr>

        <tr>
            <td><strong>Message</strong></td>
            <td>{$message}</td>
        </tr>
    </table>
    ";

    $mail->send();

    echo json_encode([
        "status" => "success",
        "message" => "Consultation request submitted successfully!"
    ]);

} catch (Exception $e) {

    echo json_encode([
        "status" => "error",
        "message" => "Mail could not be sent. " . $mail->ErrorInfo
    ]);
}