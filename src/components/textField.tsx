import { useField } from 'formik';

// styles
import styles from '../styles/textField.module.css';

interface props {
    label: string;
    placeholder: string | undefined;
    name: string;
    tip?: string;
    type: string;
}

export default function TextField({ label, tip, name, placeholder, type }: props) {
    const [field, meta] = useField({
        name: name,
        placeholder: placeholder,
        type: type
    });

    return (
        <label className={styles.wrap}>
            <span className={styles.label}>{label}</span>
            <input
                className={`${styles.field}`}
                placeholder={placeholder}
                {...field}
            />
            {meta.touched && meta.error &&
                <span className={styles.errorMessage}>{meta.error}</span>}
            {tip && <span className={styles.tip}>{tip}</span>}
        </label>
    );
}