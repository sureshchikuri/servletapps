package com.vcs.hHello;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Servletservlet extends HttpServlet {
	private String studentNo;

	public void init() throws ServletException {
		System.out.println("init()");
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		synchronized (this) {
			studentNo = request.getParameter("studentNo");
			try {
				Thread.sleep(10000L);
			} catch (InterruptedException e) {

			}
			out.println("studentNo:" + studentNo);
		}

	}

}
