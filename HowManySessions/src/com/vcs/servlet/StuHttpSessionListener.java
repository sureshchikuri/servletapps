package com.vcs.servlet;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

public class StuHttpSessionListener implements HttpSessionListener {

	private int sessionCount;

	@Override
	public void sessionCreated(HttpSessionEvent arg0) {
		// TODO Auto-generated method stub

		synchronized (this) {
			sessionCount++;
			System.out.println("SessonCount:"+sessionCount);
		}
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent arg0) {
		// TODO Auto-generated method stub

		sessionCount--;
		System.out.println("SessonCount:"+sessionCount);
	}

}
