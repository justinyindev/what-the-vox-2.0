import styles from "./Comments.module.css";

export default function Comments() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Comments</h1>
      <input
        className={styles.input}
        type={"text"}
        placeholder="Write Your Reply"
      ></input>
      <button className={styles.button} type="submit">Reply</button>
    </div>
  );
}
