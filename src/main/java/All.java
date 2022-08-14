import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.ObjectMapper;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class All extends RequestHandler {

    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        final ObjectMapper mapper = new ObjectMapper();
        try {
            String result = mapper.writeValueAsString(getService().getAll());
            return result;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

}
