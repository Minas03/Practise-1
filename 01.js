Regular N1
function makeQuestion(from = "What is Java", text = "Script ?") {
  alert(from + text);
}
makeQuestion();


Regular N2
let obj = {
  name: 'Minas',
  'lastName': 'Malkhasyan',
  age: 24
}
alert(obj.name)
alert([obj.lastName])
alert(obj['age'])


Regular N3
let arr = ['a', 'a', 'b', 'a']
let odd = arr.filter(item => item !== 'a')
alert(odd)


Regular N4
const arr = [14, 28, 3, 8, 2];
const smallest_number = Math.min(...arr);
const largest_number = Math.max(...arr);
const newArr = [smallest_number, largest_number]
console.log(newArr);


Regular N5
let arr = [5, 10, 15, 20];
function foo(arr) {
  let arr2 = [];
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr1.push(arr[i]);
    }
    else arr2.push(arr[i])
  }
  console.log(arr1, arr2);
};
foo(arr);


Regular N6
let arr = [1, 1, 2, 3, 3, 4, 4, 5]
function foo(arr) {
  let newArr = [];
  root: for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        continue root;
      }
    }
    newArr.push(arr[i])
  }
  return (newArr)
}
console.log(foo(arr))


Regular N7
const first = ["dog", "cat", "parrot"];
const second = ["lizard", "rat", "cat"];
function animal(arr1, arr2) {
  let word = ''
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        word += arr1[i] + ''
      }
    }
  }
  return (word)
}
console.log(animal(first, second))


Regular N8
const acc = (arr1, arr2) => {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.includes(arr2[i])) {
      count++
    }
  }
  if (count === arr1.length)
    return true;
  return false;
}


Regular N9
let arr = ['b', 6, 'a', 'q', 7, 2];
arr.sort()


Regular N10
let arr1 = ['mon', 'tue', 'wed', 'thur', 'fri'];
let arr2 = [2, 3];
function foo(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    let index = arr2[i]
    if (arr1[index]) arr3.push(arr1[index])
  }
  return arr3
}
foo(arr1, arr2)


Regular N11
let x = 'abcd'
function rever(x) {
  let y = ''
  for (let i = x.length - 1; i >= 0; i--) {
    y += x[i]
  } return (y)
}
rever(x)


Advanced N1
const countDublicats = (strings, lookup) => {
  let countDublicats = []
  for (let i = 0; i < lookup.length; i++) {
    countDublicats.push(0)
    for (let y = 0; y < strings.length; y++) {
      if (strings[y] === lookup[i]) {
        countDublicats[i]++
      }
    }
  }
  return countDublicats;
}
countDublicats(
  ['i', 'i', 'sadakhlo', 'i'],
  ['i', 'love', 'sadakhlo', 'esminich'])


Advanced N2
let array = [1, 3, 2, 4];
function calc(array) {
  let min = array[0];
  let max = array[0];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
    sum += array[i];
  };
  let obj = {};
  obj.max = sum - min
  obj.min = sum - max
  return obj
}
console.log(calc(array))


Advanced N3
let arr = [1, 2, 2, 1, 3, 4, 4, 3, 5]
function foo(arr) {
  let newArr = [];
  root: for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        continue root;
      }
    }
    newArr.push(arr[i])
  }
  return (newArr)
}
console.log(foo(arr))