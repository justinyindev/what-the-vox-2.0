"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Blob from "../Blob/Blob";
import getHeadlines from "@/lib/getHeadlines";
import NewsCardWrapper from "../NewsCardWrapper/NewsCardWrapper";

interface ICommentType {
  user: string;
  user_id: string;
  content: string;
  created_at: string;
}

export interface IHeadlineResponseData {
  title: string;
  url: string;
  date: string;
  image: string;
  summary: string;
  comments: [ICommentType];
}

interface INewsCardListProps {
  data: { articles: IHeadlineResponseData[]; pageInfo: any };
}

export default function NewsCardList({ data }: INewsCardListProps) {
  const [headlines, setHeadlines] = useState<IHeadlineResponseData[]>(
    data.articles
  );
  const [pageIndex, setPageIndex] = useState<number>(2);

  const fetchMoreHeadlines = async () => {
    const response = await getHeadlines({
      startDate: null,
      endDate: null,
      titles: [],
      page: pageIndex,
      limit: 10,
    });

    setHeadlines([...headlines, ...response.headlines]);
    setPageIndex(pageIndex + 1);
  };
  return (
    <div>
      {/* <Blob /> */}
      <InfiniteScroll
        dataLength={headlines.length}
        next={fetchMoreHeadlines}
        hasMore={pageIndex > data.pageInfo.totalPages ? false : true}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.5}
      >
        <NewsCardWrapper headlines={headlines} />
      </InfiniteScroll>
    </div>
  );
}
