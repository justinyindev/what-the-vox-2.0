"use client";

import { IArticleResponseData, PAGE_LIMIT } from "@/app/page";
import getAllArticles from "@/lib/getAllArticles";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface INewsCardListProps {
  data: { articles: IArticleResponseData[]; pageInfo: any };
}

export default function NewsCardList({ data }: INewsCardListProps) {
  const [articles, setArticles] = useState<IArticleResponseData[]>(
    data.articles
  );
  const [pageIndex, setPageIndex] = useState<number>(2);

  const fetchMoreHeadlines = async () => {
    const response = await getAllArticles({
      startDate: null,
      endDate: null,
      bookmarks: [],
      page: pageIndex,
      limit: PAGE_LIMIT,
    });

    setArticles([...articles, ...response.headlines]);
    if (pageIndex + 1 <= data.pageInfo.totalPages) {
      setPageIndex(pageIndex + 1);
    }
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreHeadlines}
        hasMore={pageIndex === data.pageInfo.totalPages ? false : true}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.5}
      >
        {articles.map((data: IArticleResponseData) => (
          <NewsCard headline={data} key={`event_list_${data.title}`} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
