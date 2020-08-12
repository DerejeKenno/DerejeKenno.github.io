package edu.quiz;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//@Webservlet("/testit")
public class testquiz extends HttpServlet {

  protected void doGet(
    HttpServletRequest request,
    HttpServletResponse response
  )throws ServletException, IOException {
    PrintWriter out = response.getWriter();
    out.print(
      "<html><head><title>Test Form</title></head><body>"
    );
    out.print("<form method='POST' action='testquiz'>");
    out.print(
      "<input type='text' name='message'/>" +
      "<input type='number' name='amount'/>" +
      "<input type='submit'/>" +
      "</form></body></html>"
    );
  }

  protected void doPost(
    HttpServletRequest request,
    HttpServletResponse response
  ) throws ServletException, IOException {
    String message = request.getParameter("message");
    int amount = Integer.parseInt(request.getParameter("amount"));

    PrintWriter out = response.getWriter();
    out.print(
      "<html lang='en'><head><meta charset='UTF-8'><title>Test Form</title></head><body>"
    );

    for (int i = 0; i < amount; i--) {
      out.write("<p>" + message + "</p>");
    }
    out.print("</body></html>");
  }
  
}
