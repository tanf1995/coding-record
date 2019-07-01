<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>find the dog</title>
    <style>
        table{
            width: 100%
        }
        table tr{
            height: 35px;
        }
        table tr td:first-child{
            width: 300px;
        }
        table tr td:last-child{
            width: 100%;
            float: left;
        }
        table tr td:last-child input[type=text], table tr td:last-child input[type=email]{
            width: 80%;
            border: none;
            border-bottom: 1px solid #333;
            outline: none;
        }
        button[type=submit]{
            display: block;
            margin: 15px auto;
            width: 80%;
            height: 40px;
            border: none;
            background-color: #333;
            color: #fff;
            border-radius: 5px;
            font-weight: 800;
        }
    </style>
</head>
<body>
    <h1>Aliens Abducted Me - Report an Abduction</h1>

    <h3>Share your story of alien abduction:</h3>

    <?php 
        $first_name = $_POST['first_name'];
        // $when_it_happened = $_POST('whenithappened');
        // $how_long = $_POST('howlong');
        // $alien_description = $_POST('description');
        // $fang_spotted = $_POST('fangspotted');
        // $email = $_POST('email');

        // echo 'Thanks for submitting the form.<br />';
        // echo 'You were abducted ' . $when_it_happened;
        // echo ' and were gone for ' . $how_long . '<br />';
        // echo 'Describe them: ' . $alien_description . '<br />';
        // echo 'Was Fang there? ' . $fang_spotted . '<br />';
        // echo 'Your email address is ' . $email;
        echo 'Thank you, ' . $first_name;
        // echo 'Thank you, ' . $_POST('first_name') . $_POST('last_name') . '!<br />'
    ?>
</body>
</html>