import { useField } from 'formik';
import { ChangeEventHandler, ClipboardEventHandler, KeyboardEventHandler } from 'react';
import { getInputNumbersValue, applyMask } from '../utils/phoneMask';

// styles
import styles from '..//styles/textField.module.css'

interface props {
    label: string;
    placeholder: string | undefined;
    name: string;
    tip?: string;
}

export default function PhoneField({ label, tip, name, placeholder }: props) {
    const [field, meta] = useField({
        name: name,
        placeholder: placeholder,
        type: 'text'
    });

    const handlePaste: ClipboardEventHandler<HTMLInputElement> = (e) => {
        var input = e.target as HTMLInputElement,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || (window as any).clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        let input = e.target as HTMLInputElement,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart;
        
        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            // if (e. && /\D/g.test(e.data)) {
            //     // Attempt to input non-numeric symbol
            //     input.value = inputNumbersValue;
            // }
            return console.log(e);
        }

        input.value = applyMask(input);
    }

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        // Clear input after remove last symbol
        var inputValue = (e.target as HTMLInputElement).value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            (e.target as HTMLInputElement).value = "";
        }
    }

    return (
        <label className={styles.wrap}>
            <span className={styles.label}>{label}</span>
            <input
                type='tel'
                className={`${styles.field}`}
                placeholder={placeholder}
                {...field}
                onPaste={handlePaste}
                onChange={(e) => {
                    handleInput(e);
                    field.onChange(e);
                }}
                onKeyDown={handleKeyDown}
            />
            {meta.touched && meta.error &&
                <span className={styles.errorMessage}>{meta.error}</span>}
            {tip && <span className={styles.tip}>{tip}</span>}
        </label>
    );
}