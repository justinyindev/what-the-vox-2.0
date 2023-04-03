"use client";

import Comments from "../Comments/Comments";
import { IArticleResponseData } from "../NewsCardList/NewsCardList";
import styles from "./NewsCard.module.css";

interface INewsCardProps {
  headline: IArticleResponseData;
}

export default function NewsCard({ headline }: INewsCardProps) {
  const epoch = Number(headline.date);
  const dateString = new Date(epoch).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className={styles.screen}>
      <div
        style={{ backgroundImage: `url("${headline.image}")` }}
        className={styles.image}
      ></div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.date}>{dateString}</span>
        <span className={styles.title}>{headline.title}</span>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href={headline.url}
        >
          @full article
        </a>
      </div>
    </div>
  );
}
