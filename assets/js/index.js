fetch("./assets/modules/header.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("header").innerHTML = html));

fetch("./assets/modules/footer.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));
