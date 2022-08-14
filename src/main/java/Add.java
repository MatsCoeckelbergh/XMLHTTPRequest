import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Add extends RequestHandler {

    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        NewsItem newsItem = new NewsItem(request.getParameter("title"), request.getParameter("text"), request.getParameter("author"));
        getService().add(newsItem);
        return "OK";
    }

}