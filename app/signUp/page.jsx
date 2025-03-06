import link from "next/link";
import styles from "../../styles/signUp.module.css";

export default function SignUp() {
    return (
        <div className={styles.SignUp}>
            <main className={styles.main}>

                <div className={styles.card}>
                    <div className={styles.esquerda}>
                        <h1>Welcome Back!</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className={styles.direita}>
                        <h1>Sing Up</h1>

                        <legend>Username:</legend>
                        <input type="text" placeholder="" />
                        <br />
                        <legend>Password:</legend>
                        <input type="password" placeholder="" />
                        <br />

                        <button>Enter</button>


                    </div>
                </div>
            </main>
        </div>
    )
}