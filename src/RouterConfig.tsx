import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import MainForm from './routes/MainForm';
import Start from './routes/Start';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Start />
            },
            {
                path: '/form',
                element: <MainForm />
            }
        ]
    }
]);