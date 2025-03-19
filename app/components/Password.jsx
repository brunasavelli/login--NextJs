import styles from "../../styles/Input.module.css";

export default function Password({ legend, placeholder }) {
    return (
        <div className={styles.direita}>
            <legend>{legend}</legend>
            <input type="password" placeholder={placeholder} />
        </div>
    )
}