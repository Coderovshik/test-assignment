import { redirect } from 'react-router-dom';
import User from '../storage';
import ProgerssBar from '../components/progressBar';

// styles
import styles from '../styles/mainForm.module.css';

export async function action({ request } : { request: Request }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    User.write(updates)
    return null;
}

export async function loader() {
    if (User.step == 0) {
        return redirect("/");
    }
}

export default function MainForm() {
    return(
        <div className={styles.mainForm}>
            <ProgerssBar total={3} cur={User.step} />
        </div>
    );
}