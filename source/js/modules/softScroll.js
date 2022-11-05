const localLink = document.querySelector('.intro__button');
const form = document.querySelector('.contact__form');

let box = form.getBoundingClientRect();

const initScroll = () => {
  localLink.addEventListener('click', () => {
    window.scrollTo({
      top: box.top,
      left: box.left,
      behavior: 'smooth',
    });
  });
};

export {initScroll};
