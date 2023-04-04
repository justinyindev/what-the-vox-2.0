"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.main}>
      <nav className={styles.navbar}>
        <Link className={styles.link} href={`/`}>
          <span>Home</span>
        </Link>
        <Link className={styles.link} href={`/bookmarks`}>
          <span>Bookmarks</span>
        </Link>
        <Link className={styles.link} href="/calendar">
          <span>Calendar</span>
        </Link>

        {/* <div className={styles.user}>
          <Link className={styles.link} href="/signup">
            <span>Sign Up</span>
          </Link>
        </div> */}
      </nav>
    </div>
  );
}
