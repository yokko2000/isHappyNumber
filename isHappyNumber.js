const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
      const digit = Number(numAsStr[i]);
      sum += digit * digit;
    }
  
    return sum;
  };
  const isHappyNumber = (num) => {
    let ok = '';
    let i = 1;
    while (i <= 10) {
      num = sumOfSquareDigits(num);
      if (num === 1) {
        ok = true;
        break;
      } else {
        i++;
      }
    }
    return ok || false;
  }
  export default isHappyNumber;