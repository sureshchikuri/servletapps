package com.vcs.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.GenericServlet;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class HelloServlet extends GenericServlet {

	@Override
	public void service(ServletRequest request, ServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		PrintWriter pw=response.getWriter();
		pw.append("Applicaton Context1 ");
		System.out.println("suresh");
		
		//System.out.println("StidentNo:"+getServletConfig().getServletContext().getInitParameter("InstName"));
		
		//RequestDispatcher rd=request.getRequestDispatcher("/HaiServlet");
		
		//in context scope between two applications and in same server
		//RequestDispatcher rd=getServletContext().getContext("/BasicHttpApp").getRequestDispatcher("/MyServlet");
		//rd.forward(request, response);
		//rd.include(request, response);
	
		
	}
}
