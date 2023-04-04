import NewsCard from "@/components/NewsCard/NewsCard";
import { IHeadlineResponseData } from "@/components/NewsCardList/NewsCardList";
import NewsCardWrapper from "@/components/NewsCardWrapper/NewsCardWrapper";
import getHeadlines from "@/lib/getHeadlines";
import getUserInfo from "@/lib/getUserInfo";
import { cookies } from "next/headers";

export default async function BookmarksPage() {
  const cookie = cookies();
  const data = cookie.get("userId")?.value;

  if (!data) {
    throw new Error("Invalid user id");
  }

  const { userInfo } = await getUserInfo(data);

  const { headlines } = await getHeadlines({
    startDate: null,
    endDate: null,
    titles: userInfo.bookmarks,
    page: 1,
    limit: 250,
  });

  return <NewsCardWrapper headlines={headlines} />;
}
