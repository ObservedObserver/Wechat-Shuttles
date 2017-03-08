<?php
function get_mybill($user)
{
	connectSql();
	$list=mysql_query("select * from wx_bill where username='".$user."';");
	for($i=0;$i<mysql_num_rows($list);$i++)
	{
		$tmp=mysql_fetch_array($list);
		$ans[$i]["sid"]=$tmp["sid"];
		$ans[$i]["realname"]=$tmp["realname"];
		$ans[$i]["bid"]=$tmp["bid"];
		$ans[$i]["from"]=split(';',$tmp["fromto"])[0];
		$ans[$i]["to"]=split(';',$tmp["fromto"])[1];
		$ans[$i]["price"]=$tmp["price"];
		$ans[$i]["start"]=split(';',$tmp["time"])[0];
		$ans[$i]["end"]=split(';',$tmp["time"])[1];
		$ans[$i]["date"]=$tmp["date"];
		$ans[$i]["did"]=$tmp["did"];
	}
	echo json_encode($ans);
}
function create_bill($res)
{
	connectSql();
	//-----
	$ft=$res->{"ticketInfo"}->{"from"}.';'.$res->{"ticketInfo"}->{"to"};
	$se=$res->{"ticketInfo"}->{"start"}.';'.$res->{"ticketInfo"}->{"end"};
	//-----
	$str="insert into wx_bill set ";
	$str.="username='".$res->{"userInfo"}->{"nickName"}."',";
	$str.="realname='".$res->{"orderInfo"}->{"name"}."',";
	$str.="price='".$res->{"ticketInfo"}->{"price"}."',";
	$str.="date='".$res->{"ticketInfo"}->{"date"}."',";
	$str.="time='".$se."',";
	$str.="fromto='".$ft."',";
	$str.="phone='".$res->{"orderInfo"}->{"phone"}."',";
	$str.="did='".$res->{"ticketInfo"}->{"did"}."',";
	$str.="pid='".$res->{"ticketInfo"}->{"pid"}."',";
	$str.="sid='".$res->{"orderInfo"}->{"sid"}."';";
	echo json_encode($res);
	mysql_query($str);
	//amount of product --;
	$amount=mysql_fetch_array(mysql_query("select * from wx_list where pid='".$res->{"ticketInfo"}->{"pid"}."';"))["amount"];
	$amount--;
	$change="update wx_list set ";
	$change.="amount='".$amount."' where pid='".$res->{"ticketInfo"}->{"pid"}."';";
	mysql_query($change);
}
function getList()
{
	connectSql();
	$list=mysql_query("select * from wx_list;");
	for($i=0;$i<mysql_num_rows($list);$i++)
	{
		$tmp=mysql_fetch_array($list);

		$ans[$i]["from"]=split(';',$tmp["fromto"])[0];
		$ans[$i]["to"]=split(';',$tmp["fromto"])[1];
		$ans[$i]["price"]=$tmp["price"];
		$ans[$i]["start"]=split(';',$tmp["time"])[0];
		$ans[$i]["end"]=split(';',$tmp["time"])[1];
		$ans[$i]["amount"]=$tmp["amount"];
		$ans[$i]["pid"]=$tmp["pid"];
		$ans[$i]["did"]=$tmp["did"];
		$ans[$i]["date"]=$tmp["date"];
		// echo json_encode(mysql_fetch_array($list));
	}
	echo json_encode($ans);
}
?>