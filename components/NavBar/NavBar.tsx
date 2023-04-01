import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/">
          <button className={styles.button}>Home</button>
        </Link>
        <Link href="/bookmarks">
          <button className={styles.button}>Bookmarks</button>
        </Link>
        <Link href="/Calendar">
          <button className={styles.button}>Calendar</button>
        </Link>
      </nav>
    </div>
  );
}
