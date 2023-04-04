"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { IHeadlineResponseData } from "../NewsCardList/NewsCardList";
import styles from "./NewsCard.module.css";

interface INewsCardProps {
  headline: IHeadlineResponseData;
  fullscreen?: boolean;
}

export default function NewsCard({ headline, fullscreen }: INewsCardProps) {
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [epoch, setEpoch] = useState<number>();
  const [dateString, setDateString] = useState<string>();
  const [urlTitle, setUrlTitle] = useState<string>();

  useEffect(() => {
    if (!headline) return;
    setEpoch(Number(headline.date));
    setUrlTitle(encodeURIComponent(headline.title));
  }, [headline]);

  useEffect(() => {
    if (!epoch) return;
    setDateString(
      new Date(epoch).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );
  }, [epoch]);

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
          <div className={styles.fullscreen}>
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
          </div>
        </Link>
        <div
          style={{ backgroundImage: `url("${headline.image}")` }}
          className={styles.image}
        ></div>
        <div className={styles.overlay}></div>
        {showSummary && (
          <div
            className={styles.summary}
            style={{
              alignItems: fullscreen ? "center" : "flex-start",
              padding: fullscreen ? "36px" : "8px",
              width: fullscreen ? "75%" : "100%",
            }}
          >
            <p>{headline.summary}</p>
          </div>
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
                Read full article
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
