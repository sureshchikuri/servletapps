<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'MyJsp.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
   
<form action="HaiServlet" method="get">
<table align="center">
<tr>
<td>StudentNo:<input type="text" name="no"/></td>
</tr>
<tr>
<td>StudentName:<input type="text" name="name"/></td>
</tr>
<tr>
<td>A:<input type="text" name="a"/></td>
</tr>
<tr>
<td>B:<input type="text" name="b"/></td>
</tr>
<tr>
<td><input type="submit" value="Submit"/></td>
</tr>
</table>






</form>
  </body>
</html>
