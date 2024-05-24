<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: https://Tim-Widl.de");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            // Lese den JSON-Payload aus dem Request-Body
        $json = file_get_contents('php://input');
        // Dekodiere den JSON-Payload in ein PHP-Objekt
        $params = json_decode($json);

        // Überprüfe, ob der JSON-Payload gültig ist
        if (!$params) {
            header('HTTP/1.1 400 Bad Request');
            echo json_encode(['error' => 'Invalid JSON payload']);
            exit();
        }

        // Extrahiere Daten aus dem Payload
        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        // E-Mail-Empfänger und Betreff
        $recipient = 'TimNowak195@gmail.com';
        $subject = "Contact Form <$email>";
        // Formatiere den E-Mail-Inhalt
        $body = "From: $name <br><br> $message";
        // E-Mail-Header
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            "From: noreply@Tim-Widl.de"
        ];

        // Sende die E-Mail und überprüfe den Erfolg
        if (mail($recipient, $subject, $body, implode("\r\n", $headers))) {
            echo json_encode(['success' => true]);
        } else {
            // Bei einem Fehler den entsprechenden HTTP-Status und Fehlermeldung zurückgeben
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(['error' => 'Failed to send email']);
        }
        break;
    default:
        // Bei nicht erlaubten Methoden einen Fehler zurückgeben
        header("HTTP/1.1 405 Method Not Allowed");
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
}
