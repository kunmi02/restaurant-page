import onlyImage from './assets/time.jpg';
import tabFactory from './tab_container';

const menus = (container) => {
  const obj = {
    title: 'Amala Menu',
    image: onlyImage,
    content: [
      {
        title: 'We sell all different kinds of Amala her',
        body: 'Amala dudu \n Amala lafun \n Amala Banana \nAmala Yam',
        date: 'We will make your taste bud happy',
      },
    ],
  };
  tabFactory(container).appendChild(obj);
};

export { menus };