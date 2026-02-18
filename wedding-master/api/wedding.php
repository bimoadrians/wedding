<?php
session_start();

include "config.php";

$section = isset($_GET["section"]) ? $_GET["section"] : 0;
$strSql = "";

if ($section == 1) { //view wishes
    
} else if ($section == 2) { //add wishes
    
}
// echo '<pre>'. $strSql . '</pre>';

$rows = [];
if ($auth === false) {
  $rows["auth"] = "false";
} else {
  $res = mysqli_query($conn, $strSql);
  if (mysqli_num_rows($res) > 0) {
    while ($row = mysqli_fetch_assoc($res)) {
      # code...
      $rows[] = $row;
    }
  }else{
    $rows["empty"] = "empty";
  }
}
echo json_encode($rows);