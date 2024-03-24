import styles from '/src/components/Title/title.module.css';

export default function Title({ children }) {
    return <h2 className={styles.titleScreen}>{children}</h2>;
}