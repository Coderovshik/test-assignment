import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import MainForm, { action as mainFormAction } from './routes/MainForm';
import Start, { action as startAction } from './routes/Start';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Start />,
                action: startAction
            },
            {
                path: '/form',
                element: <MainForm />,
                action: mainFormAction
            }
        ]
    }
]);