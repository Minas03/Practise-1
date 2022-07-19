Bootcamp Examination 


Exercise N1


let data = [
  ["The", "red", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"],
  ["this", "is", "a", "long", "sentence"],
];

let result = []
function groupeWords(array) {
  array.map(arr => { result.push(arr.join()) })
}
groupeWords(data)
console.log(result)



Exercise N2

function Calculator() {
  return this.calc = function (current, item, sum) {
    switch (sum) {
      case '+': {
        return current + item
      }
      case '*': {
        return current * item;
      }
      case '-': {
        return current - item;
      }
      case '/': {
        return current / item
      }
    }
  }
}

let calc = new Calculator();
console.log(calc(1, 2, '*'));



Exercise N3

let dupes = [1, 2, 3, 'a', 'a', 'f', 3, 4, 2, 'd', 'd'];

function removeDups(arr) {
  const newArr = []
  for (el of arr) {
    if (!newArr.includes(el)) {
      newArr.push(el)
    }
  }
  return newArr
};

removeDups(dupes)



Exercise N4

let arr = [
  { name: 'Alice', job: 'Data Analyst', country: 'AU' },
  { name: 'Bob', job: 'Pilot', country: 'US' },
  { name: 'Lewis', job: 'Pilot', country: 'US' },
  { name: 'Karen', job: 'Software Eng', country: 'CA' },
  { name: 'Jona', job: 'Painter', country: 'CA' },
  { name: 'Jeremy', job: 'Artist', country: 'SP' },
];

function groupe(arr, prop) {
  let obj = {}
  arr.map(item => {
    obj[item[prop]] = arr.filter(el => el[prop] == item[prop])
  })
  return obj;
}

groupe(arr, 'country')



Exercise N5

' i.like.this.program.very.much'.split('.').reverse().join('.')
'much.very.program.this.like. i'