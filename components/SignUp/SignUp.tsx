import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.graphic}></div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Create Your Account</h1>
        <input className={styles.input} placeholder={"Username"}></input>
        <input className={styles.input} placeholder={"Password"}></input>
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
