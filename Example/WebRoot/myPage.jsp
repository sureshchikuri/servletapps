<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type"
			content="text/html; charset=ISO-8859-1">
		<title>Insert title here</title>

		<script type="text/javascript" src="./js/GBMCommonFunctions.js">

function validate() {

	alert("hai")
	if (fnIsValidName(document.forms[0].sname.value)) {

		alert("please enter valid Input")
	}

}
</script>
	</head>
	<body>

		<form action="StudentServlet.do" method="get">

			Student No:
			<input type="text" name="sno" onblur="validate();">
			<br />

			Student Name:
			<input type="text" name="sname" onblur="validate();">
			<br />

			<input type="submit" value="Submit">

		</form>
	</body>
</html>