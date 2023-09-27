import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

const language = navigator.language;
let locale, messages;

console.log(language)

if (language.startsWith("es")) {
    locale = 'es-ES';
    messages = localeEsMessages;
} else if (language.startsWith("en")){
    locale = 'en-US';
    messages = localeEnMessages;
} else{ 
    locale = 'es-ES';
    messages = localeEsMessages;
}


ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
        <JobsList locale={locale}/>
    </IntlProvider>, document.getElementById('root')
);
