// Write a function `composeb` that takes two binary functions and returns a function that calls them both

const composeb = (binaryFuncA, binaryFuncB) => {
  return (argA, argB, argC) => {
    return binaryFuncB(binaryFuncA(argA, argB), argC);
  };
};

module.exports = composeb;
