<?php
function connectSql()
{
	mysql_connect(SQL_IP,SQL_USER,SQL_PASSWD);
	mysql_query("use wx_tour;");
}
?>