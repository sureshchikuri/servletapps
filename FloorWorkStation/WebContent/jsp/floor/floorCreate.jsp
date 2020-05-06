<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>WorkStation</title>
</head>
<body>
<body>
<form action="<%=request.getContextPath()%>/CreateFloorServlet" method="get">
<h2 align="center">Floor Details</h2>
<table align="center">
<tr>
<td>Floor Id</td>
<td><input type="text" name="id"/></td>
</tr>
<tr>
<td>Floor Name</td>
<td><input type="text" name="name"/></td>
</tr>
<tr>
<td>Floor Desc</td>
<td><input type="text" name="desc"/></td>
</tr>
<tr>
<td></td>
<td><input type="submit" value="submit"/>
<input type="reset" value="Reset"/></td>
</tr>
</table>
</form>
</body>
</body>
</html>


