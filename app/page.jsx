import Image from "next/image";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
            <div className={styles.card}>
              <div className={styles.esquerda}>
                <h1>Welcome!</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
              <div className={styles.direita}>
                <h1>Sing In</h1>

                <legend>Email address:</legend>
                <input type="text" placeholder=""/>
                <legend>Password:</legend>
                <input type="password" placeholder=""/>

                <button>Sign In</button>
                <button className={styles.signUp}><a href="/signUp" style={{color:'white', textDecoration: 'none'}}>Sign Up</a></button>
                

                {/* <div className={styles.text}>
                  <p>By clicking on "Sign In" you agree to</p>
                  <p><span>Terms of Service</span> | <span>Privacy Policy</span></p>
                </div> */}
              </div>
            </div>
      </main>
    </div>
  );
}
