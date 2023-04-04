import NewsCard from "@/components/NewsCard/NewsCard";
import { IArticleResponseData } from "@/components/NewsCardList/NewsCardList";
import getArticles from "@/lib/getArticles";
import getUserInfo from "@/lib/getUserInfo";
import { cookies } from "next/headers";

export default async function BookmarksPage() {
  const cookie = cookies();
  const data = cookie.get("userId")?.value;

  if (!data) {
    throw new Error("Invalid user id");
  }

  const { userInfo } = await getUserInfo(data);

  const { headlines } = await getArticles({
    startDate: null,
    endDate: null,
    titles: userInfo.bookmarks,
    page: 1,
    limit: 250,
  });

  return (
    <div>
      {headlines.map((data: IArticleResponseData) => (
        <NewsCard headline={data} key={`event_list_${data.title}`} />
      ))}
    </div>
  );
}
