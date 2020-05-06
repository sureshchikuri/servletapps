package com.vcs.ws.floor.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.vcs.floor.java.Floor;
import com.vcs.ws.floor.dao.FloorCreateDao;

@WebServlet("/floorCreate")
public class CreateFloorServlet extends HttpServlet {


	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("request submitted successfully");
		Floor floor=new Floor();
		floor.setFloor_Id(Integer.parseInt(request.getParameter("id")));
		floor.setFloor_Name(request.getParameter("name"));
		floor.setFloor_Desc(request.getParameter("desc"));

		FloorCreateDao floorCreateDao=new FloorCreateDao();
		String status=floorCreateDao.floorCreateDao(floor);
		request.setAttribute("status",status);
		RequestDispatcher rd=request.getRequestDispatcher("floorCreate.jsp");
		rd.forward(request, response);
		
		System.out.println("record submitted successfully");
	}
}
