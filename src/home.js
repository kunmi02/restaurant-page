import onlyImage from './assets/time.jpg';
import tabFactory from './tab_container';

const home = (container) => {
  const obj = {
    title: 'Amala Cafe',
    image: onlyImage,
    content: [
      {
        title: 'Local Food Made with Passion',
        body: 'Have you been craving for the best local Amala made with passion and comes out with the local flavor?, Dont go far. We dy here',
      },
    ],
  };
  tabFactory(container).appendChild(obj);
};

export { home as default };