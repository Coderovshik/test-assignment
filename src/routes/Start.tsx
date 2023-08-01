import { useState } from 'react';
import { Form } from 'react-router-dom';
import TextField from '../components/textField';
import User from '../storage';

// styles
import styles from '../styles/start.module.css';

const textFields = [
    {
        label: "Номер телефона",
        placeholder: "+7 999 999-99-99",
        name: "phoneNumber",
    },
    {
        label: "Email",
        placeholder: "tim.jennings@example.com",
        name: "email",
    },
];

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

export default function Start() {
    const [fields, setFields] = useState(Array(textFields.length).fill(""));

    return(
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
            <Form method='post' action='/form'>
                {textFields.map((field, index) => 
                    <TextField 
                        {...field} 
                        defaultValue={fields[index]}
                        onChange={(event) => {
                            let copy = fields.slice();
                            copy[index] = event.target.value;
                            setFields(copy);
                        }}
                    />
                )}
                <button 
                    id='button-start' 
                    type='submit'
                    onClick={() => User.step = 1}
                >Начать</button>
            </Form>
        </div>
    );
}