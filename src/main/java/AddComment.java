import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AddComment extends RequestHandler {

    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        Comment comment = new Comment(request.getParameter("author"), request.getParameter("content"));
        int idOfNewsItem = Integer.valueOf(request.getParameter("id"));
        for (NewsItem item : getService().getAll())
        {
            if (item.getId() == idOfNewsItem)
            {
                item.addComment(comment);
            }
        }
        return "OK";
    }

}