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
                            <Card title={"Meus Conhecimentos"} 
                            image={<div>
                                <img src="/next.js.png" alt="" width={35} height={35} />
                                <img src="/react.js.png" alt="" width={35} height={35} />
                                <img src="/javascript.png" alt="" width={35} height={35} />
                                <img src="/html.png" alt="" width={35} height={35} />
                                <img src="/css.png" alt="" width={35} height={35} />
                                <img src="/postgres.png" alt="" width={35} height={35} />
                                <img src="/node.js.png" alt="" width={35} height={35} />
                            </div>} 
                            image2={<div>
                                <img src="/vscode.png" alt="" width={35} height={35} />
                                <img src="/figma.png" alt="" width={35} height={35} />
                                <img src="/github.png" alt="" width={35} height={35} />
                                <img src="/postman.png" alt="" width={35} height={35} />
                                <img src="/sql.png" alt="" width={35} height={35} />
                                <img src="/git.png" alt="" width={35} height={35} />
                                <img src="/miro.png" alt="" width={35} height={35} />
                            </div>}
                            />
                            <Card title="Sobre mim" text="Meu nome é Bruna Savelli, tenho 17 anos." />
                            <Card title="Meus Gostos" text="Tenho interesse em lutas e em moda. Adoro me encontrar com meu amigos para nos divertirmos" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
