import NewsCard from "@/components/NewsCard/NewsCard";
import getAllArticles from "@/lib/getAllArticles";
import styles from "./page.module.css";

const PAGE_LIMIT = 10;

export interface IArticleResponseData {
  title: string;
  url: string;
  date: Date;
  image: string;
  summary: string;
}

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
      {response.headlines.map((data: IArticleResponseData) => (
        <NewsCard headline={data} key={`event_list_${data.title}`} />
      ))}
    </div>
  );
}
