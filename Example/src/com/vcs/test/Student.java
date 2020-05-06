package com.vcs.test;

import java.util.Comparator;

public class Student {

	private String studentName;
	private int rollNo;
	private int studentAge;
	
	public Student(int rollNo,String studentName,int studentAge){
		this.rollNo=rollNo;
		this.studentAge=studentAge;
		this.studentName=studentName;
	}
	
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public int getRollNo() {
		return rollNo;
	}
	public void setRollNo(int rollNo) {
		this.rollNo = rollNo;
	}
	public int getStudentAge() {
		return studentAge;
	}
	public void setStudentAge(int studentAge) {
		this.studentAge = studentAge;
	}

	public static Comparator<Student> StuNameComparator = new Comparator<Student>() {

		public int compare(Student s1, Student s2) {
		   String StudentName1 = s1.getStudentName().toUpperCase();
		   String StudentName2 = s2.getStudentName().toUpperCase();

		   //ascending order
		   return StudentName1.compareTo(StudentName2);

		   //descending order
		   //return StudentName2.compareTo(StudentName1);
	    }};

	@Override
	public String toString() {
		return "Student [rollNo=" + rollNo + ", studentAge=" + studentAge
				+ ", studentName=" + studentName + "]";
	}
	
}
