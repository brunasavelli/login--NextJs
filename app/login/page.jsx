import Image from "next/image";
import styles from "../../styles/Page.module.css";
import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
            <div className={styles.card}>
              <Text title="Welcome!" />
              <div className={styles.direita}>

                <Input title="Sing In" legend="Username:"/>
                <Input legend="Email address:"/>
                
                <Button goTo="Sign In" />

                <button className={styles.signUp}><a href="/signUp" style={{color:'white', textDecoration: 'none'}}>Sign Up</a></button>

              </div>
            </div>
      </main>
    </div>
  );
}
