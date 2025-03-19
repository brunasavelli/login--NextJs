import styles from "../../styles/Input.module.css";

export default function Input({ title, legend, placeholder }) {
    return (
        <div className={styles.direita}>
            <h1>{title}</h1>
            <legend>{legend}</legend>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}