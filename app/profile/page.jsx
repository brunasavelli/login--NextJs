import link from "next/link";
import styles from "../../styles/Profile.module.css";

export default function Profile() {
    return (
        <div className={styles.profile}>
            <main className={styles.main}>
                <div className={styles.card}>
                    <div className={styles.title}><h2>PROFILE</h2></div>
                    <div className={styles.profile}>
                        <div className={styles.esquerda}>
                            <div className={styles.fotoPerfil}>
                                <h4>Bruna Savelli</h4>
                                <img src="/perfil.png" alt="" />
                            </div>
                            <div className={styles.infoPerfil}>
                                <div className={styles.bio}>
                                    <h5>Bio:</h5>
                                </div>
                                <div className={styles.accounts}>
                                    <img src="/facebook-icon.png" alt=""style={{ width: '24px', height: '24px' }} />
                                    <input type="text" placeholder="Add Facebook" />
                                </div>
                                <div className={styles.accounts}>
                                    <img src="/x-icon.png" alt="" style={{ width: '24px', height: '24px' }}/>
                                    <input type="text" placeholder="Add X" />
                                </div>
                                <div className={styles.accounts}>
                                    <img src="/instagram-icon.png" alt="" style={{ width: '24px', height: '24px' }}/>
                                    <input type="text" placeholder="Add Instagram" />
                                </div>
                                <div className={styles.accounts}>
                                    <img src="/github-icon.png" alt="" style={{ width: '24px', height: '24px' }}/>
                                    <input type="text" placeholder="Add Github" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.direita}>
                            <div className={styles.moreInfos}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
