import NewsCardList from "@/components/NewsCardList/NewsCardList";
import getHeadlines from "@/lib/getHeadlines";
import styles from "./page.module.css";

export const revalidate = 60;

export default async function Home() {
  const response = await getHeadlines({
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
