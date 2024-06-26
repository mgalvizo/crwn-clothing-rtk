import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import {
    store,
    // persistor
} from './store/store';

import './main.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
            {/* </PersistGate> */}
        </Provider>
    </StrictMode>
);
