<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //Retrive form data 
    $Full_name = test_input($_POST['name']);
    $email= test_input($_POST['email']);
    $phone_number = test_input($_POST['phone']);
    $company_name  = test_input($_POST['company']);
    $message = test_input($_POST['message']);
    $project_type = test_input($_POST['project_type']);
    $to = "contact@tywebstudio.com"; //Replace with you sender email address 

    //Add project type to the message 
    $message .= "\n\nProject Type: " . $project_type;

    //Set up email headers 
    $boundary = md5(uniqid(time()));
    $headers= "From:  $Full_name\r\n";
    $headers .= "Email: $email\r\n";
    $headers .=  "Phone Number: $phone_number\r\n";
    $headers .=  "Company Name: $company_name\r\n";
    $headers.= "MIME-Version: 1.0\r\n"; 
    

    //Start the email body 
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding:  7bit\r\n\r\n";
    $body .= "$message\r\n";

    //Check if an attachment exists should be included 
    if(isset($_FILES['attachment']) && $_FILES['attachment']['error'] == 0){
        //Gett the attachment  details 
        $file_tmp_name = $_FILES['attachment']['tmp_name'];
        $file_name = $_FILES['attachment']['name'];
        $file_type = $_FILES['attachment']['type'];
        $file_content = chunk_split(base64_encode(file_get_contents($file_tmp_name)));

        //Set content type to multipart/mixed 
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

        //Add the attachment to the body 
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $file_content . "\r\n";
        $body .= "--$boundary--";
    }else{
        //Set content type to text/plain if no attachment is included 
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    }

    //Send the email 
    if(mail($to, $message, $body, $headers)){
     echo "Email sent successfully.";
    }else{
        echo "Failed to send email.";
    }

}else{
    echo "Invalid request.";
}

  function test_input($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }



  ?>
