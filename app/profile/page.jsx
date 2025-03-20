import link from "next/link";
import styles from "./profile.module.css";
import Card from "../components/Card";


const icons = [
    { iconsImg: "/react.js.png" },
    { iconsImg: "/next.js.png" },
    { iconsImg: "/javascript.js.png" },
    { iconsImg: "/html.js.png" },
    { iconsImg: "/css.js.png" }
];

export default function Profile() {
    return (
        <div className={styles.profile}>
            <main className={styles.main}>
                <div className={styles.backgroundTop}></div>
                <div className={styles.imageProfile}>
                    <img src="/perfil.png" alt="" />
                    <div className={styles.infos}>
                        <h2>Bruna Savelli</h2>
                        <p>Estudante de Desenvolvimento de Sistemas - SENAI SP</p>
                        <p>2TDS1</p>
                    </div>
                </div>
                <div className={styles.backgroundBottom}>
                    <div className={styles.cards}>
                        <div className={styles.row}>
                            <div className={styles.conhecimentos}>
                                <h3>Conhecimentos</h3>
                                
                            </div>
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
