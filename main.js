console.log('the world is running!');

//////////////////////////////STEP4 SOLUTION

let attempts = 0;

let myPassword1 = 'secret';

let usePassword;

function authenticateUser() {
  while (attempts < 3) {
    usePassword = prompt('Please enter the password');
    if (myPassword1 === usePassword) {
      alert('correct password!');
      return true;
    } else {
      attempts++;
      alert(`Try again, ${3 - attempts} attempts left`);
    }
  }
  return false;
}

let isLoggedIn = authenticateUser();

isLoggedIn
  ? console.log('TOP SECRET! you did it!')
  : console.log('Account Blocked');

//////////////////////////////FIRST SOLUTION

// let attempts = 0;

// let myPassword1 = 'secret';

// let usePassword;

// while (attempts < 3) {
//   usePassword = prompt('Please enter the password.');
//   if (myPassword1 === usePassword) {
//     alert('correct password! ');
//     endloop; // if password is correct will exist the loop
//   } else {
//     attempts++;
//     alert(`Try again, ${3 - attempts} attempts left`);
//     // alert(attempts + ' try again');
//   }
// }

//////////////////////////////SECOND SOLUTION

// let attempts = 0;

// let myPassword1 = 'secret';

// let usePassword;

// function authenticateUser() {
//   while (attempts < 3) {
//     usePassword = prompt('Please enter the password.');
//     if (myPassword1 === usePassword) {
//       alert('correct password!');
//       //return will break the loop
//       //without it will ask again for the password even when you inserted the correct one
//       // console.log('there are no secrets');
//       return true;
//     } else {
//       attempts++;
//       alert(`Try again, ${3 - attempts} attempts left`);
//     }
//   }
//   return false;
// }
// // console.log(authenticateUser());

// let isLoggedIn = authenticateUser();

// // if (isLoggedIn === true) {
// //   console.log('TOP SECRET! you did it!');
// // }
// isLoggedIn
//   ? console.log('TOP SECRET! you did it!')
//   : console.log('Account Blocked');
