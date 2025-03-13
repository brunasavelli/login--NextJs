import styles from "../../styles/Button.module.css";

export default function Button({ goTo, link }) {
    return (
        <div className={styles.direita}>
            <button>{goTo}</button>
        </div>
    )
}