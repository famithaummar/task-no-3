let  xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function () {
  let result  = JSON.parse(xhr.response);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].flags);
  }
};
