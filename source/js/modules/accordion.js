const accordions = document.querySelectorAll('.main-footer__accordion');

const initAccordion = () => {
  Array.prototype.slice.call(accordions).forEach((el) => {
    el.classList.remove('main-footer__accordion--nojs');
    el.classList.remove('main-footer__accordion--active');
  });
};

const toggleAccordion = () => {
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
      const panel = accordions[i].nextElementSibling;
      if (panel.style.maxHeight) {
        accordions[i].classList.remove('main-footer__accordion--active');
        panel.style.maxHeight = null;
      } else {
        Array.prototype.slice.call(accordions).forEach((el) => {
          el.classList.remove('main-footer__accordion--active');
          el.nextElementSibling.style.maxHeight = null;
          accordions[i].classList.add('main-footer__accordion--active');
        });
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
};

export {initAccordion, toggleAccordion};
