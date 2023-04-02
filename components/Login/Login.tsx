import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Welcome</h1>
        <input className={styles.input} placeholder={"Username"}></input>
        <input className={styles.input} placeholder={"Password"}></input>
        <button type="submit" className={styles.button}>
          Log in
        </button>
      </div>
      <div className={styles.graphic}></div>
    </div>
  );
}
