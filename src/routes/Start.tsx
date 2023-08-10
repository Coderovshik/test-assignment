import { useRef } from 'react';
import { Form, redirect, useSubmit } from 'react-router-dom';
import { Formik } from 'formik';
import TextField from '../components/textField';
import PhoneField from '../components/PhoneField';
import { startSchema } from '../utils/schemas';
import User from '../storage';

// styles
import styles from '../styles/start.module.css';

const initialValues = {
    tel: '',
    email: ''
};

const contacts = [
    {
        caption: "Telegram",
        link: "@Am0gusSus",
    },
    {
        caption: "GitHub",
        link: "https://github.com/Coderovshik",
    },
    {
        caption: "Resume",
        link: "",
    },
];

export async function action({ request }: { request: Request }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    User.step = 1;
    User.write(updates);
    return redirect("/form");
}

export default function Start() {
    //const [fields, setFields] = useState(Array(textFields.length).fill(""));
    const submit = useSubmit();
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <div className={styles.start}>
            <div className={styles.header}>
                <span>ПУ</span>
                <div>
                    <h1>Петр Удинцев</h1>
                    <p>
                        {contacts.map((contact) =>
                            <a
                                href={contact.link}
                                target='_blank'
                            >{contact.caption}</a>
                        )}
                    </p>
                </div>
            </div>
            <hr />
            <Formik
                initialValues={initialValues}
                validationSchema={startSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    submit(formRef.current);
                }}
            >
                {formik =>
                    <Form method='post' ref={formRef} onSubmit={formik.handleSubmit}>
                        <PhoneField
                            label='Номер телефона'
                            name='tel'
                            placeholder='+7 (999) 999-99-99' 
                        />
                        <TextField
                            label='Email'
                            name='email'
                            placeholder='tim.jennings@example.com'
                            type='email'
                        />
                        <button
                            id='button-start'
                            type='submit'
                            disabled={formik.isSubmitting}
                        >Начать</button>
                    </Form>
                }
            </Formik>
        </div>
    );
}