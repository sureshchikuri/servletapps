package com.vcs.servlet;

/*
 if we declare a instance variable and trying to give 2 inputs for that variable at a time,the second given input will be 
 overrided in 1st input.to solve this we use sync model or singlethread model.
 SingleThreadModel Isa interface.
 */

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.SingleThreadModel;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloServlet extends HttpServlet implements SingleThreadModel {

	private static final long serialVersionUID = 1L;
	private String studentNo;

	public void init() throws ServletException {
		System.out.println("init()");
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		studentNo = request.getParameter("studentNo");
		try {
			Thread.sleep(10000L);
		} catch (InterruptedException e) {

		}
		out.println("studentNo:" + studentNo);
	}

}
