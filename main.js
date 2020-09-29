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

  console.log(userLower)
  console.log(userAtIndex);
  console.log(userIndexNum)
  console.log(userSplit)
  
  if(userIndexNum == "@codeimmersives.com" && userSplit.length >= 1) {
    return console.log(true)
  } else {
    return console.log(false);
  }
}
isValidEmail(user1);
isValidEmail;

function isValidPassword(password, letter) {
  passLetter = password.charAt(letter);
  console.log(passLetter)
  console.log(password)
  console.log(letter)
  if(password.length >= 8) {

    return true;

  } else {
    return false;
  }

}
isValidPassword("fernando")

function isRegisteredUser(regUser) {
  if((regUser == user1) || (regUser == user2) || (regUser == user3)) {
    return true

  } else {
    return false;
  }
}
isRegisteredUser(user1)

function passwordMatches(passUs, passMa) {
  passUser = user1 || user2 || user3;
  passMatch = password1 || password2 || password3;
  pass1 = password1 && user1;
  pass2 = password2 && user2;
  pass3 = password3 && user3;
  if(((passUs && passMa) == (passUser && passMatch)) && (( passUs == passUser) || (pass2 == passUser) || (pass3 == passUser))) {
    return true;
  } else {
    return false;
  }
}
passwordMatches(user1, password1)


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
