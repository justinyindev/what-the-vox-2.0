"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Blob from "../Blob/Blob";
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
    data.articles.slice(0, 10)
  );
  const [pageIndex, setPageIndex] = useState<number>(1);

  const fetchMoreHeadlines = () => {
    const nextIndex = pageIndex + 1;
    const nextHeadlines = data.articles.slice(
      nextIndex * 10, // next page starting index
      (nextIndex + 1) * 10 // next page ending index
    );

    setHeadlines([...headlines, ...nextHeadlines]);
    setPageIndex(nextIndex);
  };

  return (
    <div>
      {/* <Blob /> */}
      <InfiniteScroll
        dataLength={headlines.length}
        next={fetchMoreHeadlines}
        hasMore={pageIndex * 10 < data.articles.length}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.5}
      >
        <NewsCardWrapper headlines={headlines} />
      </InfiniteScroll>
    </div>
  );
}
