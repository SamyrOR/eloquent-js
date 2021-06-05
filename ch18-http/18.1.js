// Your code here.
fetch("https://eloquentjavascript.net/author", {
  headers: { Accept: "text/plain" },
})
  .then((response) => response.text())
  .then((text) => console.log(text));

fetch("https://eloquentjavascript.net/author", {
  headers: { Accept: "application/json" },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://eloquentjavascript.net/author", {
  headers: { Accept: "text/html" },
})
  .then((response) => response.text())
  .then((text) => console.log(text));
