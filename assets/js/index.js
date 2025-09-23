fetch("./../assets/modules/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
    const path =
      window.location.pathname.replace(/^\//, "").split("/")[0] || "início";
    const breadRoute = document.getElementById("bread-route");
    if (breadRoute) {
      breadRoute.textContent = path.charAt(0).toUpperCase() + path.slice(1);
    }
  });

fetch("./../assets/modules/footer.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));
