import * as Yup from 'yup';

export const startSchema = Yup.object({
    tel: Yup.string().matches(/^(\+7|8) \(\d{3}\) \d{3}-\d{2}-\d{2}$/, { message: 'Invalid telephone number' }).required('Required'),
    email: Yup.string().email('Invalid email adress').required('Required')
});