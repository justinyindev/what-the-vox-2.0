import NewsCard from "../NewsCard/NewsCard";
import { IHeadlineResponseData } from "../NewsCardList/NewsCardList";
import styles from "./NewsCardWrapper.module.css";

interface INewsCardWrapperProps {
  headlines: IHeadlineResponseData[];
}

export default function NewsCardWrapper({ headlines }: INewsCardWrapperProps) {
  return (
    <div className={styles.main}>
      {headlines.map((data: IHeadlineResponseData) => (
        <NewsCard headline={data} key={`event_list_${data.title}`} />
      ))}
    </div>
  );
}
