package com.vcs.student;

public class Student implements Comparable<Student>{

	private int sno;
	private String sname;
	private String dept;
	
	public int getSno() {
		return sno;
	}


	public void setSno(int sno) {
		this.sno = sno;
	}


	public String getSname() {
		return sname;
	}


	public void setSname(String sname) {
		this.sname = sname;
	}


	public String getDept() {
		return dept;
	}


	public void setDept(String dept) {
		this.dept = dept;
	}

	public Student(){
		
	}

	public Student(int sno,String sname,String dept){
		
		this.sno=sno;
		this.sname=sname;
		this.dept=dept;
	}
	
	
	@Override
	public int compareTo(Student stu) {
		
		int compareno=((Student)stu).getSno();
        /* For Ascending order*/
        return this.sno-compareno;
	}


	@Override
	public String toString() {
		return "Student [dept=" + dept + ", sname=" + sname + ", sno=" + sno
				+ "]";
	}
	
	
}
