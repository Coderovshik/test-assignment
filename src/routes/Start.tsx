import { Form } from 'react-router-dom';

// styles
import styles from '../styles/start.module.css';

export default function Start() {
    return(
        <div className={styles.start}>
            <div className={styles.header}>

            </div>
            <hr />
            <Form >
                <label>
                    <span></span>
                    <input 
                    />
                </label>
                <label>
                    <span></span>
                    <input
                    />
                </label>
            </Form>
        </div>
    );
}