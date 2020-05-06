package com.vcs.ws.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class ConnectionUtil {

	public Connection getConnection() throws Exception{
		String Url="jdbc:oracle:thin:@localhost:1521:xe";
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Properties info=new Properties();
		info.setProperty("system", "system");
		info.setProperty("student", "student");
		Connection con=DriverManager.getConnection(Url,info);
		
		return con;
		
	}

}
