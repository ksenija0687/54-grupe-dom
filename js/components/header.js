export function header() {
    let base = 'http://localhost:5408/';
    let projectName = '';
    if (location.hostname !== 'localhost') {
        projectName = '/54-grupe-dom';
        base = 'https://front-end-by-rimantas.github.io/54-grupe-dom/';
    }
    document.head.insertAdjacentHTML('afterbegin', `<base href="${base}">`);

    const menu = [
        { text: 'Home', href: '/' },
        { text: 'Text', href: '/text/' },
        { text: 'Food', href: '/food/' },
        { text: 'Darzas', href: '/darzas/' },
        { text: 'Header', href: '/header/' },
        { text: 'Click', href: '/click/' },
        { text: 'Like', href: '/like/' },
    ];

    let linksHTML = '';

    for (const link of menu) {
        let activePage = '';
        if (projectName + link.href === location.pathname) {
            activePage = 'active';
        }

        linksHTML += `<a class="link ${activePage}" href=".${link.href}">${link.text}</a>`;
    }

    const HTML = `
        <header class="main-header">
            <img class="logo" src="./img/logo.png" alt="Logo">
            <nav class="main-nav">${linksHTML}</nav>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', HTML);
}