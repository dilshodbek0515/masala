// 1# 41

// {
//     const books = [
//         {
//             title: "Halqa",
//             author: "Akrom Malik",
//             read: true
//         },
//         {
//             title: "Dunyoning ishlari",
//             author: "O'tkir Hoshimov",
//             read: false
//         },
//         {
//             title: "Iymon",
//             author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//             read: false
//         }
//     ];

//     books.forEach((book, index) => {
//         const status = book.read ? "o'qilgan" : "o'qilmagan";
//         const respect = book.author === "Shayx Muhammad Sodiq Muhammad Yusuf" ? "hazratlarining " : "ning ";
//         console.log(`${index + 1}. ${book.author} ${respect}${book.title} kitobi ${status}`);
//     });
// }



// 2# 42

// const strings = ["text", "world", "laptop"];

// const result = strings.reduce((acc, str) => {
//   acc[str] = str.length;
//   return acc;
// }, {});

// console.log(result);



// 3# 43
// {
//     function multiplyValues(obj, n) {
//         const res = {};
//         for (let key in obj) {
//           if (obj.hasOwnProperty(key)) {
//             res[key] = obj[key] * n;
//           }
//         }
//         return res;
//       }
      
//       const n = 3;
//       const obj = { a: 2, b: 3, c: 4 };
      
//       const res = multiplyValues(obj, n);
//       console.log(res);
      
// }

// 4# 44
// {
//     function getLevel(n) {
//         const result = [];
//         for (let i = 1; i <= n; i++) {
//             result.push(2 ** i);
//         }
//         return result;
//     }

//     console.log(getLevel(4));
//     console.log(getLevel(5));

// }




// 5# 45
// {
//     const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

//     const countOccurrences = animals.reduce((acc, animal) => {
//         acc[animal] = (acc[animal] || 0) + 1;
//         return acc;
//     }, {});

//     console.log(countOccurrences);

// }


// 6# 46

// {
//     const number = [1,2,3,4,5,6];

//     const resalt = number.map(nam => num ** 2)
//     console.log(resalt);
    
// }


// 7# 47

// {
//     const numbers = [1, -4, 12, 0, -3, 9, -15];

// const sumPositive = numbers
//   .filter(num => num > 0)
//   .reduce((sum, num) => sum + num, 0);

// console.log(sumPositive);

// }

// 8# 48

// {
//     const name = 'Beorge Daymond Eichard Qartin';

// const initials = name
//   .split(' ')
//   .map(word => word[0])
//   .join('');

// console.log(initials);

// }


// 9# 49

// {
//     const people = [
//         { name: 'Sardor', age: 18 },
//         { name: 'Dilshod', age: 50 },
//         { name: 'Jurabek', age: 45 },
//         { name: 'Shahruz', age: 80 },
//         { name: 'Otabek', age: 25 }
//       ];
      
//       people.sort((a, b) => a.age - b.age);
      
//       const ageDifference = people[people.length - 1].age - people[0].age;
      
//       console.log(ageDifference);
      
// }


// 10 50

// {
//     var singleNumber = function(nums) {
//         const countMap = nums.reduce((acc, num) => {
//           acc[num] = (acc[num] || 0) + 1;
//           return acc;
//         }, {});
      
//         const uniqueElements = Object.keys(countMap)
//           .filter(key => countMap[key] === 1)
//           .map(key => isNaN(key) ? key : Number(key));
      
//         return uniqueElements;
//       };
      
//       console.log(singleNumber([4, 1, 2, 1, 2, 9, 8, 7, true]));
      
// }