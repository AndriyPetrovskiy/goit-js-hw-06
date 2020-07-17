import * as allUsers from './users.js';
let users = allUsers.default;

const calculateTotalBalance = users => {
    return users.reduce((total, user) => user.balance + total, 0)
  };
  
  console.log(calculateTotalBalance(users)); // 20916/

// let totalSelarry = users.reduce(function(acc, user) {
//     return user.balance + acc;
// }, 0)

// console.log(totalSelarry);