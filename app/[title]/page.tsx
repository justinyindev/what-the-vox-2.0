import NewsCard from "@/components/NewsCard/NewsCard";
import { IHeadlineResponseData } from "@/components/NewsCardList/NewsCardList";
import getHeadlines from "@/lib/getHeadlines";

type Params = {
  params: {
    title: string;
  };
};

export default async function HeadlinePage({ params: { title } }: Params) {
  const response = await getHeadlines({
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
  const response = await getHeadlines({
    startDate: null,
    endDate: null,
    titles: [],
    page: 1,
    limit: 250,
  });

  return response.headlines.map((data: IHeadlineResponseData) => ({
    title: data.title,
  }));
}
