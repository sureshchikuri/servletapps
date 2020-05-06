package com.vcs.student;

import java.util.ArrayList;
import java.util.Collections;

public class StudentNoSort {

	
	public static void main(String[] args) {
		
		ArrayList<Student> stuList=new ArrayList<Student>();
		
		stuList.add(new Student(4, "suresh", "ECE"));
		stuList.add(new Student(2, "ravi", "CSE"));
		stuList.add(new Student(6, "mahesh", "EEE"));
		stuList.add(new Student(5, "jakka", "ECE"));
		

		   Collections.sort(stuList);

		   for(Student str: stuList){
				System.out.println(str);
		   }
	}

}
