package com.vcs.ws.floor.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;



import com.vcs.floor.java.Floor;
import com.vcs.ws.util.ConnectionUtil;

public class FloorCreateDao {

	public static final String INSERT_QUERY = "insert into table floor(floor_id,floor_name,floor_desc) values(?,?,?)";

	public String floorCreateDao(Floor floor) {

		String status = null;
		Connection con = null;
		PreparedStatement ps = null;
		try {
			ConnectionUtil mycon = new ConnectionUtil();
			con = mycon.getConnection();
			if (isFloorExist(floor.getFloor_Id(), con)) {
				status = "record already present";
			} else {
				ps = con.prepareStatement(INSERT_QUERY);
				ps.setInt(1, floor.getFloor_Id());
				ps.setString(2, floor.getFloor_Name());
				ps.setString(3, floor.getFloor_Desc());
				ps.executeUpdate();
				status = "record created";
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return status;

	}

	public boolean isFloorExist(int floorId, Connection con) {
		PreparedStatement ps = null;
		ResultSet rs = null;
		boolean value = false;
		try {
			ps = con.prepareStatement("select count(*) from emp where Floor_Id="+ floorId + "");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			rs = ps.executeQuery();
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try {
			if (rs.next()) {
				int count = 0;
				try {
					count = rs.getInt(1);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				if (count > 1) {
					value = true;
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return value;
	}
}
