function reverseNumber(num) {
    let sign = num < 0 ? '-' : '';
    num = Math.abs(num) + '';
    return Number(sign + num.split('').reverse().join(''));
  }

reverseNumber(123);