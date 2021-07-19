console.log("lesson 2");

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// плейлист с урока:
//lesson2 (10) https://www.youtube.com/playlist?list=PLbLBXDhswD1eNiE-NpwsnTg0x9J9w788t

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(a: number) {
  return function (b: number) {
    return a + b;
  };
}

console.log(sum(4)(3));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
  let i = 0;
  console.log("counter created with initial value equals ", i);
  return function () {
    i += 1;
    return i;
  };
}

const counter = makeCounter();
console.log("counter: ", counter());
console.log("counter: ", counter());

const counter2 = makeCounter();
console.log("counter2: ", counter2());
console.log("counter: ", counter());

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента
// и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeAdvansedCounter(startValue: number) {
  let i = startValue;
  console.log("Advaced counter created with initial value equals ", i);
  return {
    increase: function () {
      i++;
      return i;
    },
    decrease: function () {
      i--;
      return i;
    },
    reset: function () {
      i = 0;
      return i;
    },
    set: function (val: number) {
      i = val;
      return i;
    }
  };
}

const counter3 = makeAdvansedCounter(100);
console.log("counter3 increase: ", counter3.increase());
console.log("counter3 decrease: ", counter3.decrease());
console.log("counter3 reset: ", counter3.reset());
console.log("counter3 set: ", counter3.set(25));

function makeAdvansedCounterWithGetter(startValue: number) {
  let i = startValue;
  console.log("Advaced counter created with initial value equals ", i);
  return {
    increase: function () {
      i++;
    },
    decrease: function () {
      i--;
    },
    reset: function () {
      i = 0;
    },
    set: function (val: number) {
      i = val;
    },
    get: function () {
      return i;
    }
  };
}

const counter4 = makeAdvansedCounterWithGetter(100);
counter4.increase();
console.log("counter4 increase: ", counter4.get());
counter4.decrease();
console.log("counter4 decrease: ", counter4.get());
counter4.reset();
console.log("counter4 reset: ", counter4.get());
counter4.set(785);
console.log("counter4 set: ", counter4.get());

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// just a plug
export default () => {};
