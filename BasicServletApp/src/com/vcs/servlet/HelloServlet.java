package com.vcs.servlet;

import java.io.IOException;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class HelloServlet implements Servlet {

	private ServletConfig config;
	
	
	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println("destroy()");
	}


	public ServletConfig getServletConfig() {
		return null;
	}


	public String getServletInfo() {
		// TODO Auto-generated method stub
		return null;
	}

	
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		this.config=config;
		System.out.println("init()");
		
	}

	
	public void service(ServletRequest arg0, ServletResponse arg1)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		System.out.println("InitParam:"+config.getInitParameter("vcs"));
	}
}
