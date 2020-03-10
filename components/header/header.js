class Header extends HTMLElement {
    links = [{
        label: 'Services',
        href: 'services.html'
    },{
        label: 'Arvigo® Therapy',
        href: 'arvigo.html'
    },{
        label: 'Yoga',
        href: 'yoga.html'
    },{
        label: 'About',
        href: 'about.html'
    },{
        label: 'Schedule',
        href: 'schedule.html'
    }];

    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const [currentPage] = window.location.pathname.split('/').slice(-1);

        const header = document.createElement('header');
        const menuIcon = document.createElement('div');
        menuIcon.classList.add('menu-icon');
        menuIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 52 52"><path fill="#000" d="m46.5 14h-41c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h41c0.8 0 1.5 0.7 1.5 1.5v3c0 0.8-0.7 1.5-1.5 1.5z m0 14.9h-41c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.7 0.7-1.4 1.5-1.4h41c0.8 0 1.5 0.7 1.5 1.5v3c0 0.7-0.7 1.4-1.5 1.4z m0 15.1h-41c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h41c0.8 0 1.5 0.7 1.5 1.5v3c0 0.8-0.7 1.5-1.5 1.5z"></path></svg>';
        menuIcon.onclick = () => {
            this.toggleMenu();
        };

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = 'Steph Bordeau Massage';

        header.appendChild(menuIcon);
        header.appendChild(title);

        const menu = document.createElement('nav');
        menu.classList.add('menu');
        const links = document.createElement('ul');
        menu.appendChild(links);

        this.links.forEach(link => {
            const item = document.createElement('li');
            item.innerHTML = `<a href="${link.href}">${link.label}</a>`;
            if (currentPage === link.href) {
                item.classList.add('selected');
            }
            links.appendChild(item);
        });

        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'components/header/header.css');

        shadow.appendChild(link);
        shadow.appendChild(header);
        shadow.appendChild(menu);
    }

    toggleMenu() {
        const menu = this.shadowRoot.querySelector('.menu');
        menu.classList.toggle('visible');
    }
}

customElements.define('sbm-header', Header);