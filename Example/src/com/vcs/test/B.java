package com.vcs.test;

public class B extends A{

	public void method1(){
		super.method1();
		
		System.out.println("sub()");
	}
	
	public static void main(String[] args) {
		
		B b=new B();
		b.method1();
		System.out.println(b);
		
	}
}
