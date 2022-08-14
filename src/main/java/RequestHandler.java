import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public abstract class RequestHandler {
    protected NewsItemRepository newsItemRepository;

    public abstract String handleRequest (HttpServletRequest request, HttpServletResponse response);

    public NewsItemRepository getService() {
        return newsItemRepository;
    }


    public void setService(NewsItemRepository service) {
        this.newsItemRepository = service;
    }
}