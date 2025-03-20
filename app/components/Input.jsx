import styles from "../../styles/Input.module.css";

export default function Input({ title, legend, type, placeholder, value, onChange }) {
    return (
        <div className={styles.direita}>
            <h1>{title}</h1>
            <legend>{legend}</legend>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}