package edu.miu;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class calculatorApp extends HttpServlet {

  protected void doGet(
    HttpServletRequest request,
    HttpServletResponse response
  )
    throws ServletException, IOException {
    PrintWriter out = response.getWriter();
    out.print("<html><head><title>Calculator</title></head><body>");
    out.print("<form method = 'post'>");
    out.print(
      "<input type='text' name = 'addA'/> <span>+</span>  <input type='text' name='addA'/>" +
      "<span>=</span><input type='text' name='sum'/><br>"
    );
    out.print(
      "<input type='text' name = 'multA'/> <span>*</span> <input type='text' name='multB'/>" +
      "<span>=</span><input type='text' name='product'/></br>"
    );
    out.print("<input type='submit' value='Submit'/>");
    out.print("</form>");
    out.print("</body><html>");
  }

  protected void doPost(
    HttpServletRequest request,
    HttpServletResponse response
  )
    throws ServletException, IOException {
    if (
      (
        request.getParameter("addA").equals("") ||
        request.getParameter("addA").equals("")
      ) &&
      (
        request.getParameter("multA").equals("") ||
        request.getParameter("multB").equals("")
      )
    ) {
      PrintWriter out = response.getWriter();
      out.print("<html><head><title>Test</title></head><body>");
      out.print("<form method = 'post'>");
      out.print(
        "<input type='text' name = 'addA'/> <span>+</span>  <input type='text' name='addA'/>" +
        "<span>=</span><input type='text' name='sum'/><br>"
      );
      out.print(
        "<input type='text' name = 'multA'/> <span>*</span> <input type='text' name='multB'/>" +
        "<span>=</span><input type='text' name='product'/></br>"
      );
      out.print("<input type='submit' value='Submit'/>");
      out.print("</form>");
      out.print("<p>Invalid input for calculation...try again!</p>");
      out.print("</body><html>");
    } else if (
      (
        !request.getParameter("addA").equals("") ||
        !request.getParameter("addA").equals("")
      ) &&
      (
        request.getParameter("multA").equals("") ||
        request.getParameter("multB").equals("")
      )
    ) {
      int adA = Integer.parseInt(request.getParameter("addA"));
      int adB = Integer.parseInt(request.getParameter("addA"));
      PrintWriter out = response.getWriter();
      out.print("<html><head><title>Test</title></head><body>");
      out.print("<form method = 'post'>");
      out.print(
        "<input type='text' name = 'addA' value = '" +
        adA +
        "'/> <span>+</span>  " +
        "<input type='text' name='addA' value = '" +
        adB +
        "'/>" +
        "<span>=</span><input type='text' name='sum' value = '" +
        (adA + adB) +
        "'/><br>"
      );
      out.print(
        "<input type='text' name = 'multA'/> <span>*</span> <input type='text' name='multB'/>" +
        "<span>=</span><input type='text' name='product'/></br>"
      );
      out.print("<input type='submit' value='Submit'/>");
      out.print("</form>");
      out.print("</body><html>");
    } else if (
      (
        !request.getParameter("multA").equals("") ||
        !request.getParameter("multB").equals("")
      ) &&
      (
        request.getParameter("addA").equals("") ||
        request.getParameter("addA").equals("")
      )
    ) {
      int mulA = Integer.parseInt(
        request.getParameter("multA")
      );
      int mulB = Integer.parseInt(
        request.getParameter("multB")
      );
      PrintWriter out = response.getWriter();
      out.print("<html><head><title>Test</title></head><body>");
      out.print("<form method = 'post'>");
      out.print(
        "<input type='text' name = 'addA'/> <span>+</span>  " +
        "<input type='text' name='addA'/>" +
        "<span>=</span><input type='text' name='sum'/><br>"
      );
      out.print(
        "<input type='text' name = 'multA' value = '" +
        mulA +
        "'/> <span>*</span>" +
        " <input type='text' name='multB' value = '" +
        mulB +
        "'/>" +
        "<span>=</span><input type='text' name='product' value = '" +
        (mulA * mulB) +
        "'/></br>"
      );
      out.print("<input type='submit' value='Submit'/>");
      out.print("</form>");
      out.print("</body><html>");
    } else {
      int adA = Integer.parseInt(request.getParameter("addA"));
      int adB = Integer.parseInt(request.getParameter("addA"));
      int mulB = Integer.parseInt(
        request.getParameter("multB")
      );
      int mulA = Integer.parseInt(
        request.getParameter("multA")
      );
      PrintWriter out = response.getWriter();
      out.print("<html><head><title>Test</title></head><body>");
      out.print("<form method = 'post'>");
      out.print(
        "<input type='text' name = 'addA' value = '" +
        adA +
        "'/> <span>+</span>  " +
        "<input type='text' name='addA' value = '" +
        adB +
        "'/>" +
        "<span>=</span><input type='text' name='sum' value = '" +
        (adA + adB) +
        "'/><br>"
      );
      out.print(
        "<input type='text' name = 'multA' value = '" +
        mulA +
        "'/> <span>*</span>" +
        " <input type='text' name='multB' value = '" +
        mulB +
        "'/>" +
        "<span>=</span><input type='text' name='product' value = '" +
        (mulA * mulB) +
        "'/></br>"
      );
      out.print("<input type='submit' value='Submit'/>");
      out.print("</form>");
      out.print("</body><html>");
    }
  }
}
