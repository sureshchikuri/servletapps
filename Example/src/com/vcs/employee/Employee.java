package com.vcs.employee;

import java.util.Comparator;

public class Employee {

	private int eno;
	private String ename;
	private String dept;
	private int sal;

	public Employee() {
	}

	public int getEno() {
		return eno;
	}

	public void setEno(int eno) {
		this.eno = eno;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}

	public int getSal() {
		return sal;
	}

	public void setSal(int sal) {
		this.sal = sal;
	}

	public Employee(int eno, String ename, String dept, int sal) {
		this.eno = eno;
		this.ename = ename;
		this.dept = dept;
		this.sal = sal;
	}

	public static Comparator<Employee> EmpNameComparator = new Comparator<Employee>() {

		public int compare(Employee emp1, Employee emp2) {

			//String e1 = emp1.getEname();
			//String e2 = emp2.getEname();
			
		/*	int sal1=emp1.getSal();
			int sal2=emp2.getSal();
			
			if(sal1>sal2){
				return -1;
			}else{
				return +1;
			}*/
			
			return emp1.getEname().compareTo(emp2.getEname());
			
		}
	};

	@Override
	public String toString() {
		return "Employee [dept=" + dept + ", ename=" + ename + ", eno=" + eno
				+ ", sal=" + sal + "]";
	}

}
