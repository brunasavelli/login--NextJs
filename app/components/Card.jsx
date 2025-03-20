import styles from "../../styles/Card.module.css";

export default function Card({ title }) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            
        </div>
    );
}
