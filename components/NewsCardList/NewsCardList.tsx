"use client";

import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./NewsCardList.module.css";
import Blob from "../Blob/Blob";
import getArticles from "@/lib/getArticles";

interface ICommentType {
  user: string;
  user_id: string;
  content: string;
  created_at: string;
}

export interface IArticleResponseData {
  title: string;
  url: string;
  date: string;
  image: string;
  summary: string;
  comments: [ICommentType];
}

interface INewsCardListProps {
  data: { articles: IArticleResponseData[]; pageInfo: any };
}

export default function NewsCardList({ data }: INewsCardListProps) {
  const [articles, setArticles] = useState<IArticleResponseData[]>(
    data.articles
  );
  const [pageIndex, setPageIndex] = useState<number>(2);

  const fetchMoreHeadlines = async () => {
    const response = await getArticles({
      startDate: null,
      endDate: null,
      titles: [],
      page: pageIndex,
      limit: 10,
    });

    setArticles([...articles, ...response.headlines]);
    setPageIndex(pageIndex + 1);
  };
  return (
    <div>
      <Blob />
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreHeadlines}
        hasMore={pageIndex > data.pageInfo.totalPages ? false : true}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.5}
      >
        <div className={styles.main}>
          {articles.map((data: IArticleResponseData) => (
            <NewsCard headline={data} key={`event_list_${data.title}`} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
