import { Outlet } from 'react-router-dom';

// styles
import styles from '../styles/root.module.css';

export default function Root() {
    return(
        <div className={styles.rootWrap}>
            <Outlet />
        </div>
    );
}