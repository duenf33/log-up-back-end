// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'colin.jaffe@codeimmersives.com';
const password1 = 'Hotforhimself';
const user2 = 'mesuara@codeimmersives.com';
const password2 = 'Console.logger';
const user3 = 'anthony@codeimmersives.com';
const password3 = 'like a BOSS';


// **YOUR** code below. Pass those tests!
// we are not able to use regex. no match() etc.
function isValidEmail(user) {

  let userLower = user.toLowerCase()
  let userAtIndex = userLower.indexOf('@')
  let userIndexNum = userLower.slice(userAtIndex, 34 )
  let userSplit = userLower.split("@")

  return (userIndexNum == "@codeimmersives.com") && (userSplit[0].length >= 1);

  //   if((userIndexNum == "@codeimmersives.com") && (userSplit[0].length >= 1)) {
  //   return true;
  // } else {
  //   return false;
  // }
}

function isValidPassword(password) {

  if((password.length >= 8) && (password.toLowerCase() !== password) && (password.toUpperCase() !== password)) {
    return true;
  } else {
    return false;
  }
}

function isRegisteredUser(regUser) {

  return regUser == user1 || regUser == user2 || regUser == user3;

  // if((regUser == user1) || (regUser == user2) || (regUser == user3)) {
  //   return true
  // } else {
  //   return false;
  // }
}

function passwordMatches(passUs, passMa) {

  passUser = user1 || user2 || user3;
  passMatch = password1 || password2 || password3;
  passUserMatch = passUser && passMatch;
  pass1 = password1 && user1;
  pass2 = password2 && user2;
  pass3 = password3 && user3;

  return ((passUs == passUser) && (passMa == passMatch)) && ((passUs == user1) && (passMa == password1)) || ((passUs == user2) && (passMa == password2)) || (passUs == user3) && (passMa == password3);

  // if(((passUs == passUser) && (passMa == passMatch)) && ((passUs == user1) && (passMa == password1)) || ((passUs == user2) && (passMa == password2)) || (passUs == user3) && (passMa == password3)) {
  //   return true;
  // } else {
  //   return false;
  // }
}

// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
}
