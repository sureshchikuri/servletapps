package com.vcs.examples;

public class FloorCreateDao {
	/*
	 * String status = null; Connection connection=null; PreparedStatement ps =
	 * null; connection = ConnectionUtil.getInstance().getConnetion();
	 * if(isFloorExist(floor.getFloorId(),connection)) { status =
	 * "record already present"; } else { ps =
	 * connection.prepareStatement(INSERT_QUERY); ps.setInt(1, floor.getFloorId());
	 * ps.setString(2, floor.getFloorName()); ps.setString(3, floor.getFloorDesc());
	 * ps.executeUpdate(); status = "record created"; } return status; }
	 * 
	 * public boolean isFloorExist(int floorId,Connection connection) throws
	 * Exception { PreparedStatement ps = null; ResultSet rs = null; boolean value =
	 * false;
	 * 
	 * connection = ConnectionUtil.getInstance().getConnetion(); ps =
	 * connection.prepareStatement("select count(*) from floor where Floor_Id="+
	 * floorId + ""); rs = ps.executeQuery(); if (rs.next()) { int count = 0; if
	 * (count > 1) { value = true; } } return value; } }
	 */
}
