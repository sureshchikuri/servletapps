<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'page1.jsp' starting page</title>
    

  </head>
  
  <body>
 <form action="final.jsp">
 
 Student No:<input type="text" name="studentNo" value="<%=request.getParameter("studentNo") %>"/><br/>
 StudentName:<input type="text" name="studentName" value="<%=request.getParameter("studentName") %>"/><br/>
 <input type="submit" value="Final"/>
 </form>
 
  </body>
</html>
