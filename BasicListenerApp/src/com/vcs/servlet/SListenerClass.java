package com.vcs.servlet;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class SListenerClass implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub

		System.out.println("Listener destroyed");
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		// TODO Auto-generated method stub

		System.out.println("listener initialissed");
	}

}
