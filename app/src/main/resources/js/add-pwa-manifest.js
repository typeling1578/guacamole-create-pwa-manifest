(function () {
  const elem = document.createElement("link");
  elem.rel = "manifest";
  elem.href = "app/ext/create-pwa-manifest/manifest/manifest.json";

  document.head.appendChild(elem);
})();
