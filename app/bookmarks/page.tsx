import NewsCard from "@/components/NewsCard/NewsCard";
import { IArticleResponseData } from "@/components/NewsCardList/NewsCardList";
import getAllArticles from "@/lib/getAllArticles";
import getUserInfo from "@/lib/getUserInfo";
import { cookies } from "next/headers";

export default async function BookmarksPage() {
  const cookie = cookies();
  const data = cookie.get("userId")?.value;

  if (!data) {
    throw new Error("Invalid user id");
  }

  const { userInfo } = await getUserInfo(data);

  const { headlines } = await getAllArticles({
    startDate: null,
    endDate: null,
    bookmarks: userInfo.bookmarks,
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
