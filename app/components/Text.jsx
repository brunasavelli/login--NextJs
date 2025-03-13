import styles from "../../styles/Text.module.css";

export default function Text({ title }) {
    return (
        <div className={styles.esquerda}>
            <h1>{title}</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <div className={styles.signInIcons}>
                <p>Sign In with</p>
            </div>
            <div className={styles.icons}>
                <img src="/google-icon.png" alt="Logo" width={24} height={24} />
                <img src="/apple-icon.png" alt="Logo" width={24} height={24} />
                <img src="/facebook-icon.png" alt="Logo" width={24} height={24} />
                <img src="/github-icon.png" alt="Logo" width={24} height={24} />
            </div>
        </div>
    )
}