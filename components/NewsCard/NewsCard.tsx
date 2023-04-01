"use client";

import { IArticleResponseData } from "@/app/page";
import { useState } from "react";
import styles from "./NewsCard.module.css";

interface INewsCardProps {
  headline: IArticleResponseData;
}

export default function NewsCard({ headline }: INewsCardProps) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className={styles.main} style={{ height: !open ? "100px" : "" }}>
      <span className={styles.toggle} onClick={() => setOpen(!open)}>
        {open ? (
          <i className={styles.close}></i>
        ) : (
          <i className={styles.open}></i>
        )}
      </span>

      <h1 className={styles.heading}>{headline.title}</h1>

      <div className={styles.content} style={{ display: !open ? "none" : "" }}>
        <div className={styles.flexRow}>
          <img
            className={styles.image}
            src={`data:image/jpeg;base64,${headline.image}`}
            alt={headline.title}
          />
          <div className={styles.textContainer}>
            <p className={styles.text}>{headline.summary}</p>
          </div>
        </div>
        <a className={styles.link} href={headline.url}>
          <h2 className={styles.subheading}>View Full Article</h2>
        </a>
      </div>
    </div>
  );
}
