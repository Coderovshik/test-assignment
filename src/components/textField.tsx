// styles
import styles from '../styles/textField.module.css';

interface props {
    label: string;
    placeholder: string | undefined;
    name: string;
    tip: string | undefined;
    defaultValue: string | undefined;
    onChange: (event: any) => void;
}

export default function TextField({ label, placeholder, name, tip, defaultValue, onChange }: props) {
    return (
        <label className={styles.wrap}>
            <span className={styles.label}>{label}</span>
            <input
                className={styles.field}
                placeholder={placeholder}
                name={name}
                defaultValue={defaultValue}
                onChange={onChange}
            />
            <span className={styles.tip}>{tip}</span>
        </label>
    );
}