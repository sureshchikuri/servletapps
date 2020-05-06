package com.vcs.employee;

import java.util.ArrayList;
import java.util.Collections;

public class EmployeeNameSort {

	public static void main(String[] args) {

		ArrayList<Employee> stuList = new ArrayList<Employee>();

		stuList.add(new Employee(4, "suresh", "ECE", 25000));
		stuList.add(new Employee(2, "ravi", "CSE", 20000));
		stuList.add(new Employee(6, "mahesh", "EEE", 40000));
		stuList.add(new Employee(5, "suresh", "ECE", 35000));
		stuList.add(new Employee(1, "ravi", "ECE", 15000));

		Collections.sort(stuList,Employee.EmpNameComparator);

		for (Employee str : stuList) {
			System.out.println(str);
		}
	}

}
