const curtain = document.querySelector('.about__button');
const panel = document.querySelector('.about__panel');

const initCurtain = () => {
  curtain.classList.remove('about__button--nojs');
};

const toggleCurtain = () => {
  curtain.addEventListener('click', function () {
    curtain.classList.toggle('about__button--active');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      curtain.innerHTML = 'Подробнее';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      curtain.innerHTML = 'Свернуть';
    }
  });
};

export {initCurtain, toggleCurtain};
