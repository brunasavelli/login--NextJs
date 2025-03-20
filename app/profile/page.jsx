import link from "next/link";
import styles from "./profile.module.css";

export default function Profile() {
    return (
        <div className={styles.profile}>
            <main className={styles.main}>
                <div className={styles.backgroundTop}></div>
                <div className={styles.backgroundBottom}></div>
            </main>
        </div>
    );
}
