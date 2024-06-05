const count = () => {
  let num = 1;
  num++;
  return num;
};
console.log(count()); //2
console.log(count()); //2
console.log(count()); //2

const newCount = () => {
  //closure funtion: it has its own memory
  let num = 1;
  return function count() {
    num++;
    return num;
  };
};
let callA = newCount();
console.log(callA()); //2
console.log(callA()); //3
console.log(callA()); //4
