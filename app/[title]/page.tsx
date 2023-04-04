import NewsCard from "@/components/NewsCard/NewsCard";
import { IArticleResponseData } from "@/components/NewsCardList/NewsCardList";
import getArticles from "@/lib/getArticles";

type Params = {
  params: {
    title: string;
  };
};

export default async function HeadlinePage({ params: { title } }: Params) {
  const response = await getArticles({
    startDate: null,
    endDate: null,
    titles: [decodeURIComponent(title)],
    page: 1,
    limit: 1,
  });

  return (
    <div>
      <NewsCard headline={response.headlines[0]} fullscreen={true} />
    </div>
  );
}

export async function generateStaticParams() {
  const response = await getArticles({
    startDate: null,
    endDate: null,
    titles: [],
    page: 1,
    limit: 250,
  });

  return response.headlines.map((data: IArticleResponseData) => ({
    title: data.title,
  }));
}
