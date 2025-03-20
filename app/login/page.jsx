"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import styles from "./login.module.css";
import Text from "../components/Text";
import Input from "../components/Input";
import Password from "../components/Password";

export default function Login() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
            <div className={styles.card}>
              <Text title="Welcome!" />
              <div className={styles.direita}>

                <Input title="Sign In" legend="Username:" placeholder="Ex: brunasavelli123" />
                <Password legend="Password:" placeholder="Insert your password" />

                <button onClick={() => router.push("/profile")}>Enter</button>
                <button onClick={() => router.push("/signUp")}>Sign Up</button>

              </div>
            </div>
      </main>
    </div>
  );
}
