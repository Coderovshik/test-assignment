import { object, string } from 'yup';

export const startSchema = object({
    phoneNumber: string().matches(/^\+7 \d{3} \d{3}-\d{2}-\d{2}/),
    email: string().email(),
});