<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["attachment"]["name"]);

    if (move_uploaded_file($_FILES["attachment"]["tmp_name"], $target_file)) {
        $response = array('status' => 'success', 'path' => $target_file);
        echo json_encode($response);
    } else {
        $response = array('status' => 'error', 'message' => 'Error uploading file.');
        echo json_encode($response);
    }
} else {
    $response = array('status' => 'error', 'message' => 'Invalid request method.');
    echo json_encode($response);
}
?>
