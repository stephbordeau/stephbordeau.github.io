const links = [{
    label: 'Services',
    href: 'services.html'
},{
    label: 'Arvigo&reg; Therapy',
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

const [currentPage] = window.location.pathname.split('/').slice(-1);

const header = document.createElement('header');
const menuIcon = document.createElement('div');
menuIcon.classList.add('menu-icon');
menuIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 52 52"><path fill="#000" d="m46.5 14h-41c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h41c0.8 0 1.5 0.7 1.5 1.5v3c0 0.8-0.7 1.5-1.5 1.5z m0 14.9h-41c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.7 0.7-1.4 1.5-1.4h41c0.8 0 1.5 0.7 1.5 1.5v3c0 0.7-0.7 1.4-1.5 1.4z m0 15.1h-41c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h41c0.8 0 1.5 0.7 1.5 1.5v3c0 0.8-0.7 1.5-1.5 1.5z"></path></svg>';
menuIcon.onclick = () => {
    const menu = document.querySelector('.mobile-nav .menu');
    menu.classList.toggle('visible');
};

const title = document.createElement('div');
title.classList.add('title');
title.textContent = 'Steph Bordeau Massage';

header.appendChild(menuIcon);
header.appendChild(title);

const menu = document.createElement('nav');
menu.classList.add('menu');
const ul = document.createElement('ul');
menu.appendChild(ul);

links.forEach(link => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.href}">${link.label}</a>`;
    if (currentPage === link.href) {
        li.classList.add('selected');
    }
    ul.appendChild(li);
});

const parent = document.querySelector('.mobile-nav');
parent.appendChild(header);
parent.appendChild(menu);
