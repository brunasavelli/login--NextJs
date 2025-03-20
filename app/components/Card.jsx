import styles from "../../styles/Card.module.css";

export default function Card({ title, text, image }) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{text}</p>
            <image>{image}</image>
        </div>
    );
}
