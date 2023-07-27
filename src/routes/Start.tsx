import { useState } from 'react';
import { Form } from 'react-router-dom';
import TextField from '../components/textField';

// styles
import styles from '../styles/start.module.css';

let textFields = [
    {
        label: "Номер телефона",
        placeholder: "+7 999 999-99-99",
        name: "phoneNumber",
        tip: undefined,
        defaultValue: undefined
    },
    {
        label: "Email",
        placeholder: "tim.jennings@example.com",
        name: "email",
        tip: undefined,
        defaultValue: undefined
    },
];

export default function Start() {
    const [fields, setFields] = useState(Array(textFields.length).fill(""));

    return(
        <div className={styles.start}>
            <div className={styles.header}>

            </div>
            <hr />
            <Form >
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
                <button type='submit' />
            </Form>
        </div>
    );
}