
let obj1 = { name:"person 1",age: 5 };
let obj2 = { age: 5, name: "person 1" };

var flag = true;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
  for (let key in obj1) {
    if (obj1[key] == obj2[key]) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
} else {
  flag= false;
}
console.log(flag);