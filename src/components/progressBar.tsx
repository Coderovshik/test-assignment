// styles
import styles from "../styles/progressBar.module.css";

export default function ProgerssBar({ total, cur }: { total: number, cur: number }) {

    let bars = [];
    for (let i = 1; i < total; i++) {
        bars.push(
            <span className={ i < cur ? styles.active : undefined }></span>
        );
    }

    let points = [];
    for (let i = 1; i <= total; i++) {
        points.push(
            <span className={ i <= cur ? styles.active : undefined }>{ i < cur || i == 1 ? "·" : i == cur ? "✔" : ""}</span>
        );
    }

    return (
        <div className={styles.progressBar}>
            <p className={styles.bars}>
                {bars}
            </p>
            <p className={styles.points}>
                {points}
            </p>
        </div>
    );
}