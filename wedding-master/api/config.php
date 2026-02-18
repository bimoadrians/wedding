<?php
  
  //global var
  $GLOB_AUDIT_FLAG = "OFF";

  //server
  $host_db    = "192.168.10.172";
  $user_db    = "bimo";
  $pass_db    = "undanganper@gmail.com";
  $nama_db    = "db_wedding";
  $port_db    = "3306";

  $conn = mysqli_connect($host_db, $user_db, $pass_db, $nama_db, $port_db);
  
  // Change character set to utf8
  mysqli_set_charset($conn,"utf8");