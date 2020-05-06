package com.vcs.test;

import java.util.ArrayList;
import java.util.Collections;

public class ArrayListSorting {

	public static void main(String[] args) {
		
		ArrayList<Student> arrayList=new ArrayList<Student>();
		
		arrayList.add(new Student(223,"suresh",23));
		arrayList.add(new Student(240,"kiran",26));
		arrayList.add(new Student(215,"abhi",24));
		arrayList.add(new Student(219,"mahesh",28));
		arrayList.add(new Student(263,"laila",27));
		
		 /*Sorting based on Student Name*/
		   System.out.println("Student Name Sorting:");
		   Collections.sort(arrayList, Student.StuNameComparator);

		   for(Student str: arrayList){
				System.out.println(str);
		   }
	}
}
