import * as allUsers from './users.js';
let users = allUsers.default;

console.log(users);

// function expression
//   const getUserNames = function(array) {
//     array.map(function(element) {
//         return element.name;
//     })
//   };
  
// arrow function

const getUserNames = users => users.map(user => user.name);


  console.log(getUserNames(users));
//   [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]





//   const userNames = users.map(function(user) {
//       return user.name;
//   });
  
//   console.log(userNames);

//   console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]