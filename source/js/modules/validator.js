const NUMBER_LENGTH = 11;

const inputsTel = document.querySelectorAll('input[type="tel"]');

const prefixNumber = (str) => {
  if (str === '7') {
    return '7(';
  }
  if (str === '8') {
    return '7(';
  }
  if (str === '9') {
    return '7(9';
  }
  return '7(';
};

const checkFirstNumber = () => {
  Array.prototype.slice.call(inputsTel).forEach((el) => {
    el.addEventListener('input', () => {
      const value = el.value.replace(/\D+/g, '');
      let result;

      if (el.value.includes('+8')) {
        result = '';
      } else {
        result = '+';
      }

      for (let i = 0; i < value.length && i < NUMBER_LENGTH; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[i];
      }

      el.value = result;
    });
  });
};

export {checkFirstNumber};
