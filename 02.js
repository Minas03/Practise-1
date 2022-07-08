Exercise N1
let arr = [2, 5, 100]
let arr1 = arr.map((item) => item * 2)


Exercise N2
let arr = [2, 5, 100]
let result = arr.map((item) => item.toString())


Exercise N3
let capitalizeNames = (arr) => {
  let upperCase = arr.map((element) => {
    return (element.charAt(0).toUpperCase()) + (element.substring(1).toLowerCase());
  });
  console.log(upperCase);
};
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);


Exercise N4
let users = [
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];
let names = users.map((item) => item.name)


Exercise N5
let people = [
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]
let check = people.filter((item) => item.age > 18);
let result = check.map((item) => item.name + ' can go to The Matrix');


Exercise N6
const input = [1, -4, 12, 0, -3, 29, -150];
let find = input.filter((item) => item >= 0);
let result = find.reduce((current, value) => current + value);


Exercise N7
const input = [
  {
    name: 'John',
    age: 13
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  }
];
let check = input.map((item) => {
  if (item.age > 65) {
    max = item.age
  } if (item.age <= 13) {
    min = item.age
  }
});
let mid = max - min;
let result = [min, mid, max]


Exercise 8
const input = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];
let arr = input.flat();
let result = arr.reduce((prev, item) => {
  prev[item] = prev[item] ? prev[item] + 1 : 1
  return prev
}, {})


Exercise N9
function findMajority(arr, n) {
  let maxCount = 0;
  let index = -1;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j])
        count++;
    }
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }
  if (maxCount > n / 2)
    alert(arr[index]);
  else
    alert('Undefined');
}
let arr = [2, 2, 1, 1, 1, 2, 2];
let n = arr.length;
findMajority(arr, n);


Exercise N11
let words = ["i", "love", "leetcode", "apples"]
let check = words.join('')
let result = check.includes('iloveleetcode')


Exercise N12
const phoneCountryCodes = {
  '+374': 'Armenia',
  '+375': 'Somali',
  '+376': 'Russia',
  '+377': 'Hoktemberyan',
};
const arrOfObjects = [
  {
    name: 'sarah',
    age: 32,
    phoneNumber: '+374000000',
    relation: 'nelly'
  },
  {
    name: 'nelly',
    age: 11,
    phoneNumber: '+3750020000',
    relation: 'sarah'
  }
];
function num(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].name = arr[i].name.toUpperCase()
    arr[i].country = phoneCountryCodes[arr[i].phoneNumber.slice(0, 4)]
    arr[i].relation = arr[i]
  }
  return arr
}
num(arrOfObjects, phoneCountryCodes)