package com.vcs.filter;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.omg.CORBA.Request;

import com.sun.mail.iap.Response;
import com.vcs.wrapper.SerReqImpl;
import com.vcs.wrapper.SerResImpl;

public class FilterToAssignReqRes  implements Filter {

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doFilter(ServletRequest arg0, ServletResponse arg1,
			FilterChain arg2) throws IOException, ServletException {
		// TODO Auto-generated method stub
		arg0=new SerReqImpl(arg0);
		arg1=new SerResImpl(arg1);
		//PrintWriter pw = new PrintWriter(null);
	//	pw.print("filter wrapped");
	//	pw.print("Req from:"+arg0);
		//pw.print("res from:"+arg1);
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}

}
