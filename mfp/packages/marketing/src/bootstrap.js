import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount
const mount = (htmlElement) => {
    ReactDOM.render(
        <App/>,
        htmlElement
    );
}

// Development
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// Isolation
export { mount };

