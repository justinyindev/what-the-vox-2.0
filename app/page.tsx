import NewsCardList from "@/components/NewsCardList/NewsCardList";
import getArticles from "@/lib/getArticles";
import styles from "./page.module.css";

export default async function Home() {
  const response = await getArticles({
    startDate: null,
    endDate: null,
    titles: [],
    page: 1,
    limit: 10,
  });

  return (
    <div className={styles.container}>
      <NewsCardList
        data={{ articles: response.headlines, pageInfo: response.pageInfo }}
      />
    </div>
  );
}
