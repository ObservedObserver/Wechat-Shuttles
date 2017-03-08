<?php
header("Content-Type: text/html; charset=UTF-8");
require("./config/config.php");
require("./API/tourAPI.php");
require("./sql/sqlQuery.php");
$request=$_GET['info'];
$request=json_decode($request);
if($request->{"qid"}=="getList")
{
	getList();
	//echo "hello";
}
else if($request->{"qid"}=="get_mybill")
{
	get_mybill($request->{"nickName"});
}
else if($request->{qid}=="create_bill")
{
	create_bill($request);
}
?>