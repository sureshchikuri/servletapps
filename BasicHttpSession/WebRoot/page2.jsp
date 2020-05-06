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
 
 <% 
 String studentNo=request.getParameter("studentNo");
 String studentName=request.getParameter("studentName");
 String URL="review.jsp?studentNo="+studentNo;
 URL=response.encodeURL(URL+"&studentName="+studentName);
 %>
 <form action="review.jsp">
 <a href='<%=URL%>'>FinalPage</a>
 <input type="submit" value="Review"/>
 </form>
 
  </body>
</html>
