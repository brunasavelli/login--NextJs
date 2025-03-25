"use client";

import { useRouter } from "next/navigation";

import link from "next/link";
import styles from "./signUp.module.css";
import Text from "../components/Text";
import Input from "../components/Input";
import Verification from "../verification";

export default function SignUp() {
    const router = useRouter();

    return (
        <div className={styles.SignUp}>
            <main className={styles.main}>

                <div className={styles.card}>
                    <Text title="Welcome Back!" />
                    <div className={styles.direita}>
                        
                        <Input title="Sign Up" legend="Username:" placeholder="Ex: brunasavelli123" />
                        <Verification />

                        <button onClick={() => router.push("/profile")}>Enter</button>

                        <div className={styles.backToLogin}>
                            <a href="/login" style={{ color: 'white' }}>Already have an account? Sign In</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
