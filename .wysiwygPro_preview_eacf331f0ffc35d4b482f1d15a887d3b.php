<?php
if ($_GET['randomId'] != "3oUZQBRUrXl078HLNbUnn4nl0y0XUIXN4x6xFVR33NbY57qJTno1JQKTqJBeM8Op") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
