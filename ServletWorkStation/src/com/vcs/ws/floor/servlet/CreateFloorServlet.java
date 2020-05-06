package com.vcs.ws.floor.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.vcs.floor.java.Floor;
import com.vcs.ws.floor.dao.FloorCreate;

public class CreateFloorServlet extends HttpServlet {


	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		Floor floor=new Floor();
		floor.setFloor_Id(Integer.parseInt(request.getParameter("id")));
		floor.setFloor_Name(request.getParameter("name"));
		floor.setFloor_Desc(request.getParameter("desc"));


		
		FloorCreate floorCreate=new FloorCreate();
		String status=floorCreate.floorCreate(floor);
		request.setAttribute("status",status);
		RequestDispatcher rd=request.getRequestDispatcher("floorCreate.jsp");
		rd.forward(request, response);
		
		System.out.println("record submitted successfully");
	}
}
