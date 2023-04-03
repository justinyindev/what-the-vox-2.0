"use client";

import { useEffect, useRef } from "react";
import styles from "./Blob.module.css";

export default function Blob() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      if (blobRef.current) {
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 1000, fill: "forwards" }
        );
      }
    };
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);


  return <div ref={blobRef} className={styles.blob}></div>;
}
