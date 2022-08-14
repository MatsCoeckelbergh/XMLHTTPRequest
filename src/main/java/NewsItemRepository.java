import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class NewsItemRepository {
    private List<NewsItem> newsItems = new ArrayList<NewsItem>();

    public NewsItemRepository(){
        NewsItem rampOpUcll = new NewsItem("ramp op ucll", "Vandaag is er een brand geweest in de serverruimte van Roedi", "pieter geens");
        NewsItem rampOpkul = new NewsItem("ramp op kul", "Vandaag is er NOG een brand geweest in de serverruimte van Roedi", "pieter geens");
        rampOpUcll.addComment(new Comment("Mats", "Ge had de deur maar vast moeten doen!"));
        rampOpUcll.addComment(new Comment("Sander", "Ja haha luister maar naar Mats, want anders doet hij het opnieuw hoor!"));
        rampOpkul.addComment(new Comment("Mats", "Wie niet leert, wie niet deert!"));
        newsItems.add(rampOpUcll);
        newsItems.add(rampOpkul);
    }
    public List<NewsItem> getAll() {
        return newsItems;
    }

    public void add (NewsItem newsItem) {
        newsItems.add(newsItem);
    }

    public NewsItem getRandomNewsItem() {
        Random random = new Random();
        int position = random.nextInt(newsItems.size());
        return newsItems.get(position);
    }
}
