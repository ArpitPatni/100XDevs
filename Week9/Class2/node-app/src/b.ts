interface User {
  firstName: string;
  lastName: string;
  age: number;
}
function isLegal(user:User) {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal({
  firstName: "arpit",
  lastName: "Patni",
  age: 20,
}));
