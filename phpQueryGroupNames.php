<?php
print <<<HTML_START
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Step Six</title>
</head>
<body>
HTML_START;

$mysqli = new mysqli('localhost', 'norombabaor', 'George72!', '194_3430_project_team8');



if ($mysqli->connect_errno)
{
    print "<p>Error: Unable to connect to MySQL. ";
    print "Errno: " . $mysqli->connect_errno . "\n";
    print 'Error:' . $mysqli->connect_error . "\n";
    "</p>";
    exit;
}
else{print "<p>Connection Successful";}

print <<<HTML_FORM
<form method="get" action="$_SERVER[PHP_SELF]">
<p>Group Name: <input type="text" name='gname'><br>
<input type="submit" value="Group Search"></p>
</form>
HTML_FORM;

//lets test that variable
$var = $_GET["gname"];
//echo $var;

$query = "SELECT * FROM groups WHERE group_name LIKE '%$var%'";
$result = $mysqli->query($query);


if (array_key_exists('gname', $_GET))
{
    print "<table>\n";
    print "<tr><th>group_id</th>
          <th>group_name</th>
          <th>number_volunteers</th>
          <th>history</th>
          <th>start_date</th>
          <th>active</th></tr>";

    while ($d = $result->fetch_assoc())
    {
        //might need a way to create an array pulling data.
        //this just uses the data created in the tables from retrieveDepartment.php
        $group_id = $d['group_id'];
        $group_name = $d['group_name'];
        $number_volunteers = $d['number_volunteers'];
        $history = $d['history'];
        $start_date = $d['start_date'];
        $active = $d['active'];

        print "<tr><td>$group_id</td><td>$group_name</td><td>$number_volunteers</td><td>$history</td><td>$start_date</td><td>$active</td></tr>";

    }

    print "</table>\n";
}
else {
    print "<p>Error: Query Failed.</p>";
}


/* free result set */
$result->free();

$mysqli->close();

print <<<HTML_END
</body>
</html>
HTML_END;
?>