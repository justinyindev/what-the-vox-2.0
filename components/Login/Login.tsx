"use client";

import userLogin from "@/lib/userLogin";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./Login.module.css";
import { setCookie } from "cookies-next";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (event: FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const handlePassword = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = () => {
    if (username.length === 0 || password.length === 0) {
      console.log("returning");
      return;
    }
    const login = async () => {
      const response = await userLogin(username, password);
      if (!response) {
        return;
      }

      setCookie("authToken", response.token);
      console.log({ response });
      router.push("/");
    };
    login();
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Welcome</h1>
        <input
          className={styles.input}
          placeholder={"Username"}
          onChange={handleUsername}
          value={username}
        ></input>
        <input
          className={styles.input}
          placeholder={"Password"}
          onChange={handlePassword}
          type="password"
          value={password}
        ></input>
        <button type="submit" className={styles.button} onClick={handleSubmit}>
          Log In
        </button>
      </div>
      <div className={styles.graphic}></div>
    </div>
  );
}
