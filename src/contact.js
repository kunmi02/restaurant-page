import onlyImage from './assets/time.jpg';
import tabFactory from './tab_container';

const contact = (container) => {
  const obj = {
    title: 'Contact information',
    image: onlyImage,
    content: [
      {
        title: 'Make a reservation',
        body: 'If you want to a reservation please call: 2345678 \n Mail us on: forfoodonly@food.world',
        date: 'We look forward to you coming to eat our food!',
      }, 
    ],
  };
  tabFactory(container).appendChild(obj);
};

export { contact};