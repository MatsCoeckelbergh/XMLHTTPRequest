import java.time.LocalDate;

public class Comment {
    private String author;
    private String content;
    private LocalDate date;
    private static int amount = 0;
    private int id;

    public Comment(String author, String content) {
        this.author = author;
        this.content = content;
        this.setDate(LocalDate.now());
        this.setId(++amount);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
