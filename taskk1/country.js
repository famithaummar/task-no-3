var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function () {
  var result = JSON.parse(xhr.response);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].name);
    console.log(result[i].region);
    console.log(result[i].subregion);
    console.log(result[i].population);
  }
};
