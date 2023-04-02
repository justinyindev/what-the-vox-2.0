import NewsCardList from "@/components/NewsCardList/NewsCardList";
import getAllArticles from "@/lib/getAllArticles";
import styles from "./page.module.css";

export const PAGE_LIMIT = 10;

export default async function Home() {
  const response = await getAllArticles({
    startDate: null,
    endDate: null,
    bookmarks: [],
    page: 1,
    limit: PAGE_LIMIT,
  });

  return (
    <div className={styles.container}>
      <NewsCardList
        data={{ articles: response.headlines, pageInfo: response.pageInfo }}
      />
    </div>
  );
}
