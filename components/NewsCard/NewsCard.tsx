"use client";

import Link from "next/link";
import { useState } from "react";
import { IArticleResponseData } from "../NewsCardList/NewsCardList";
import styles from "./NewsCard.module.css";

interface INewsCardProps {
  headline: IArticleResponseData;
  fullscreen?: boolean;
}

export default function NewsCard({ headline, fullscreen }: INewsCardProps) {
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const epoch = Number(headline.date);
  const dateString = new Date(epoch).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const urlTitle = encodeURIComponent(headline.title);

  return (
    <div className={styles.main}>
      <div
        className={styles.screen}
        onClick={() => setShowSummary(!showSummary)}
        style={{
          transform: showSummary ? "rotateY(180deg)" : "rotateY(0deg)",
          justifyContent: showSummary ? "center" : "flex-end",
        }}
      >
        <Link href={fullscreen ? "/" : `/${urlTitle}`}>
          <i className={styles.fullscreen}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3H9V5H5V9H3V3Z" fill="currentColor" />
              <path d="M3 21H9V19H5V15H3V21Z" fill="currentColor" />
              <path d="M15 21H21V15H19V19H15V21Z" fill="currentColor" />
              <path d="M21 3H15V5H19V9H21V3Z" fill="currentColor" />
            </svg>
          </i>
        </Link>
        <div
          style={{ backgroundImage: `url("${headline.image}")` }}
          className={styles.image}
        ></div>
        <div className={styles.overlay}></div>
        {showSummary && (
          <p
            className={styles.summary}
            style={{
              alignItems: fullscreen ? "center" : "flex-start",
              padding: fullscreen ? "36px" : "8px",
              width: fullscreen ? "75%" : "100%"
            }}
          >
            {headline.summary}
          </p>
        )}
        <div className={styles.content}>
          {!showSummary && (
            <>
              <span className={styles.date}>{dateString}</span>
              <div className={styles.title_container}>
                <span className={styles.title}>{headline.title}</span>
              </div>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={headline.url}
              >
                @full article
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
