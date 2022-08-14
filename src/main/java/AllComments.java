import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.ObjectMapper;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class AllComments extends RequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        final ObjectMapper mapper = new ObjectMapper();
        try {
            ArrayList<Comment> output = new ArrayList<Comment>();
            for (NewsItem newsItem : getService().getAll()){
                for (Comment comment : newsItem.getComments()){
                    output.add(comment);
                }
            }
            String result = mapper.writeValueAsString(output);
            return result;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

}
