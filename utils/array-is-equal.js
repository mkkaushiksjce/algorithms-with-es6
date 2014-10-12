let arrIsEqual = (arrX, arrY) => {
  if (arrX.length !== arrY.length) return false;
  if (!Array.isArray(arrX) || !Array.isArray(arrY)) return false;

  let index = -1;
  let isEqual = true;

  while (++index <= arrX.length) {
    if (arrX[index] !== arrY[index]) {
      isEqual = false;
    }
  }

  return isEqual;
};

module.exports = arrIsEqual;
