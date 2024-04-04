import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import global_en from '../src/assests/translations/en/global.json'
import global_es from '../src/assests/translations/es/global.json'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
            global: global_en,
        },
        es: {
            global: global_es,
        },
    },
})

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
