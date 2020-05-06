package com.vcs.wrapper;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.ServletResponseWrapper;

public class SerResImpl extends ServletResponseWrapper {
	public SerResImpl(ServletResponse response){
		super(response);
		System.out.println("response");
	}

}
