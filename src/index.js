import home from './home';
import menus from './menu';
import contact from './contact';
import styles from './assets/styles.scss'


const mainPage = (container) => {
  const createTab = (key) => {
    switch (key) {
      case 'Home': home(container); break;
      case 'Menu': menus(container); break;
      case 'Contact': contact(container); break;
      default: home(container);
    }
  };

  const addTab = (ul, title) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = title;
    li.addEventListener('click', (event) => createTab(event.target.textContent));
  };

  const addTabNavbar = () => {
    const navBar = document.querySelector('nav');
    const ul = document.createElement('ul');
    navBar.appendChild(ul);
    addTab(ul, 'Home');
    addTab(ul, 'Menu');
    addTab(ul, 'Contact');
  };

  const run = () => {
    addTabNavbar();
    createTab('Home');
  };

  return { run };
};

mainPage(document.querySelector('#content')).run();