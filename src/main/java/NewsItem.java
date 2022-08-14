import java.time.LocalDate;
import java.util.ArrayList;

public class NewsItem {
    private String title;
    private String text;
    private String author;
    private LocalDate date;
    private static int amount = 0;
    private int id;

    private ArrayList<Comment> comments = new ArrayList<Comment>();

    public NewsItem(String title, String text, String author){
        setTitle(title);
        setText(text);
        setAuthor(author);
        this.date=LocalDate.now();
        this.setId(++amount);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void addComment(Comment comment){
        comments.add(comment);
    }

    public ArrayList<Comment> getComments() {
        return comments;
    }

    public void setComments(ArrayList<Comment> comments) {
        this.comments = comments;
    }
}
