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
 <form action="HelloServlet">
 <%
 Cookie[] cookies=request.getCookies();
 Cookie cookie=null;
 for(int i=0;i<cookies.length;i++){
 cookie=cookies[i];
 out.println(cookie.getName()+" : "+cookie.getValue()+"<br/>");
 }
  %>
 </form>
 
  </body>
</html>
