package com.vcs.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HaiServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		String studentNo=request.getParameter("no");
		String studentName=request.getParameter("name");
		
		int a=Integer.parseInt(request.getParameter("a"));
		int b=Integer.parseInt(request.getParameter("b"));
		int result=a+b;
		
		System.out.println(studentNo);
		System.out.println(studentName);
		System.out.println("a:"+a);
		System.out.println("b:"+b);
		System.out.println("Result:"+result);
	
		request.setAttribute("result", result);
		RequestDispatcher rd=request.getRequestDispatcher("ResultServlet");
		rd.forward(request, response);
		
	}

}
