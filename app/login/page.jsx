import Image from "next/image";
import styles from "../../styles/page.module.css";
import Text from "../components/Text";
import Input from "../components/Input";
import Password from "../components/Password";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
            <div className={styles.card}>
              <Text title="Welcome!" />
              <div className={styles.direita}>

                <Input title="Sign In" legend="Username:" />
                <Password legend="Password:"/>
                
                <Button goTo="Sign In" />

                <button className={styles.signUp}><a href="/signUp" style={{color:'white', textDecoration: 'none'}}>Sign Up</a></button>

              </div>
            </div>
      </main>
    </div>
  );
}
