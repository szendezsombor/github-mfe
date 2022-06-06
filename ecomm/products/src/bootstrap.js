import faker from 'faker';

const mount = (htmlElement) => {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    htmlElement.innerHTML = products;
};

// Context #1
// Development módú futtatás a lokális index.html fájlban
if (process.env.NODE_ENV === 'development') { // A webpack adja hozzá ezt mode: 'development'
    // Az itteni HTMLElementnek elég unique nevet kell megadnunk, nehogy össze akaszkodjon egy másik projekttel
    const rootElement = document.querySelector('#dev-products');
    if (rootElement) {
        mount(rootElement);
    }
}

// Context #2
// Production/development módú futtatás, de nincs meg a placeholder amibe renderelhetjük
export { mount };
