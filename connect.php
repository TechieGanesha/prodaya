<html>
<head>
<title>REGISTRATION</title>
</head>
<body>
<?php
 
define('DB_HOST', 'localhost');
define('DB_NAME', 'shripadm_prodaya');
define('DB_USER','shripadm_ganesh');
define('DB_PASSWORD','@Abc123@');
 


     $con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD)or die('Failed to connect to MySQL:');
     $db=mysql_select_db(DB_NAME,$con) or die('Failed connect to MySQL:');

 

        $clgid = $_POST['clgid']; 
        $fullname = $_POST['name'];
	$email = $_POST['email'];
	$college = $_POST['college'];
	$accom = $_POST['accom'];
	$gender = $_POST['gender'];
        $contact =  $_POST['contact'];
	
    $query = "INSERT INTO websiteusers (fullname,email,institute_name,clgid,gender,accomodation,contact) VALUES ('$fullname','$email','$college','$clgid','$gender','$accom','$contact')";
	
        $data = mysql_query($query)or die(mysql_error());
	$sub = 'PRODAYA 2014 Registration';
	$from = 'admin@prodaya.in';
	$headers= "From: $from";
    

	if($data)
    {
	
	$id = mysql_query("SELECT UserID FROM websiteusers WHERE email = '$email'",$con);

   $row = mysql_fetch_array($id);
        
   $userId=$row['0'];
       
     
       
	$string1="You have been registered with PRODAYA 2014, the annual techno-cultural festival of National Institute of Technology, Uttarakhand. You must carry your original id-card of your college along with you to participate in the techno-cultural fest. "."

Your user ID for Prodaya-2014 ( will be required for event registrations also): prodaya";
	
        $string2= (string)$userId;
	
        $msg = $string1.$string2;
	
        $mail=mail($email, $sub, $msg, $headers);
	
        if($mail)
	{
?>
<script type="text/javascript" >
	    alert("Registration Successful. Check your email for user id and further details.");
	    history.go(-1);
	    </script>
        <?PHP
           
	}
	else
	{
	?>
<script type="text/javascript" >
	    alert("Error Occurred. Fill in all the details correctly and try again.")
	    </script>
        <?PHP
	}
    }

    mysql_close($con);
    ?>	
	
</body>
</html>

