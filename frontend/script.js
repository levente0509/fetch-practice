const apiKey = "a27xS6s9Dn5XIP3f0B78SekAWPtn5uF5946sjdEE";
let apiDate = "2022-10-10";
let fetchUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${apiDate}`;

fetch(fetchUrl);
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (responseJson) {
//     console.log(responseJson);
//   });

/* fetch(fetchUrl)
  .then((response) => response.json())
  .then((responseJson) => console.log(responseJson));
 */
async function fetchNasa() {
  const response = await fetch(fetchUrl);
  //   console.log(response);
  const responseJson = await response.json();
  //   console.log(responseJson);
  return responseJson;
}

async function loadEvent() {
  let data = await fetchNasa();
  console.log("data:", data);

  const rootElement = document.querySelector("#root");
  rootElement.insertAdjacentHTML(
    "beforeend",
    `
  <h1>${data.title}</h1>
  <h2>${data.date}</h2>
  <p>${data.explanation}</p>
  <img src="${data.url}">
  `
  );
}
window.addEventListener("load", loadEvent);
