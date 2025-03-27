import styles from "../../styles/Card.module.css";

export default function Card({ title, text, image, image2, }) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{text}</p>
            <div>{image}</div>
            <div>{image2}</div>
        </div>
    );
}
