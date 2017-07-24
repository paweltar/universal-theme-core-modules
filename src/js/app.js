import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import $ from "jquery";

import "./components/gallery-section";
import "./components/contact-section";

UIkit.use(Icons);

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector("#modal-full");
  mobileMenu.addEventListener("click", function() {
    UIkit.modal(this).hide();
  });
});
