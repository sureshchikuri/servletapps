package com.vcs.dao;

public class StudentDaoThread  implements Runnable{

	@Override
	public void run() {

		System.err.println("StudentDaoThread");
	}

}
