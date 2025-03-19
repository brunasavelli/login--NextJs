import styles from "../../styles/Button.module.css";

export default function Button({ goTo, link }) {
    return (
        <div className={styles.direita}>
            <button><a href={link} style={{color:'white', textDecoration: 'none'}}>{goTo}</a></button>
        </div>
    )
}