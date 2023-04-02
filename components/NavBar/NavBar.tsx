"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const userId = "test"
  const router = useRouter();
  return (
    <div>
      <nav className={styles.navbar}>
        <button
          onClick={() => {
            router.push("/");
            router.refresh();
          }}
          className={styles.button}
        >
          Home
        </button>

        <Link href={`/bookmarks/${userId}`}>
          <button className={styles.button}>Bookmarks</button>
        </Link>
        <Link href="/calendar">
          <button className={styles.button}>Calendar</button>
        </Link>
        <div className={styles.user}>
          <Link href="/login">
            <button className={styles.button}>Login</button>
          </Link>
          <Link href="/signup">
            <button className={styles.button}>Sign Up</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
