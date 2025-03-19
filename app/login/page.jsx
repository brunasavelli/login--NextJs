import Image from "next/image";
import styles from "./login.module.css";
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

                <Input title="Sign In" legend="Username:" placeholder="Ex: brunasavelli123" />
                <Password legend="Password:" placeholder="Insert your password" />

                <Button goTo="Sign In" link="/login" />
                <Button goTo="Sign Up" link="/signUp" />

              </div>
            </div>
      </main>
    </div>
  );
}
