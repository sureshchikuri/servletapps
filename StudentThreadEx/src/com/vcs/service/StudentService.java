package com.vcs.service;

import com.vcs.dao.StudentDao;
import com.vcs.dao.StudentDaoThread;

public class StudentService {

	public String insertData() throws InterruptedException{
		
		String status=null;
		
		StudentDaoThread daoThread=new StudentDaoThread();
		Thread thread=new Thread(daoThread);
		thread.start();
		
		StudentDao studentDao=new StudentDao();
		studentDao.insertData();
		
		status="Data inserted successfully";
		
		return status;
		
	}
	
}
