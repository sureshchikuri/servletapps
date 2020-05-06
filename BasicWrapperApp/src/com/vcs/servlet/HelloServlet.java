package com.vcs.servlet;

import java.io.IOException;

import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import com.vcs.wrapper.SerReqImpl;
import com.vcs.wrapper.SerResImpl;

public class HelloServlet extends GenericServlet {

	
	private static final long serialVersionUID = 1L;

	@Override
	public void service(ServletRequest arg0, ServletResponse arg1)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		arg0=new SerReqImpl(arg0);
		arg1=new SerResImpl(arg1);
		System.out.println("SerReqImpl:"+arg0);
		System.out.println("SerReqImpl:"+arg1);
		System.out.println("StudentNo:"+arg0.getParameter("studentNo"));
		
	}

}
