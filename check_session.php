<?php
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);
ini_set('session.cookie_secure', 1);
session_start();
header('Content-Type: application/json');

// Clear output buffer to prevent any unwanted output
ob_clean();

if (isset($_SESSION['User_ID']) && isset($_SESSION['First_Name'])) {
    echo json_encode([
        'status' => 'success',
        'firstName' => $_SESSION['First_Name'],
        'userId' => $_SESSION['User_ID']
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Not logged in'
    ]);
}
exit();
?>