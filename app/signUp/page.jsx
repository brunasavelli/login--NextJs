import link from "next/link";
import styles from "../../styles/SignUp.module.css";
import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import Password from "../components/Password";
import Verification from "../verification";

export default function SignUp() {
    return (
        <div className={styles.SignUp}>
            <main className={styles.main}>

                <div className={styles.card}>
                    <Text title="Welcome Back!" />
                    <div className={styles.direita}>
                        
                        <Input title="Sign Up" legend="Username:" />
                        <Verification />
                        
                        {/* <Password legend="Password:"/>
                        <Password legend="Confirm Password:"/> */}
                        <Button goTo="Enter" />


                    </div>
                </div>
            </main>
        </div>
    );
}
