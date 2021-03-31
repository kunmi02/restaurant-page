import _ from 'lodash';
import { home } from './home'
import { menus } from './menu'
import { contact } from './contact'

// function component() {
  // alert('Testing webpack');
  // const element = document.createElement('div');
// Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // return element;
//   const content = document.getElementById('content');
//   content.innerHTML = ''
//   const x = document.createElement("LI");
//   const t = document.createTextNode("Home");
//   x.onclick = () => {
//     home()
//   }
//   x.appendChild(t);
//   content.appendChild(x);

//   const x1 = document.createElement("LI");
//   const menu = document.createTextNode("Menu");
//   x1.onclick = () => {
//     menus()
//   }
//   x1.appendChild(menu);
//   content.appendChild(x1);

//   const x2 = document.createElement("LI");
//   const t2 = document.createTextNode("Contact");
//   x2.onclick = () => {
//     contact()
//   }
//   x2.appendChild(t2);
//   content.appendChild(x2);

// }

// document.body.appendChild(component());

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