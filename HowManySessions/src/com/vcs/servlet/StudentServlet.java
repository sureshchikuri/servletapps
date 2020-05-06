package com.vcs.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class StudentServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		HttpSession session=request.getSession();
		if(session.isNew()){
			System.out.println("New");
		}else{
			System.out.println("old");
		}
		System.out.println("session:"+session);
		
		//session.setMaxInactiveInterval(1*60);
		session=request.getSession();
		
		System.out.println("session:"+session);
	}

}
