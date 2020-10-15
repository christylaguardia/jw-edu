// import "@fortawesome/fontawesome-free";

exports.onClientEntry = () => {
  window.addEventListener("load", () => {
    document.body.className = "has-navbar-fixed-top";
  });
};
