package com.vcs.servlet;

import javax.servlet.ServletRequest;
import javax.servlet.ServletRequestWrapper;

public class MyServlet extends ServletRequestWrapper {
	private ServletRequest request;

	public MyServlet(ServletRequest request) {
		//this.request=request;
		super(request);
		// TODO Auto-generated constructor stub
	}

	public String getParameter(String parameter) {
		
		System.out.println("ByPasssLogic()");
		return request.getParameter(parameter);

	}
}
