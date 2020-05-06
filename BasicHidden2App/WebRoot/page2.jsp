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
 <form action="review.jsp">
 
 Student No:<input type="text" name="studentNo" value="<%=request.getParameter("studentNo") %>" readonly="readonly" /><br/>
 StudentName:<input type="text" name="studentName"/><br/>
 <input type="submit" value="Review"/>
 
 <input type="hidden"  name="srudentNo" value="<%=request.getParameter("studentNo") %>"/>
 
 </form>
 
 
  </body>
</html>
