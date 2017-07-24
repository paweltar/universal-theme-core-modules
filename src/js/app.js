import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import $ from "jquery";

UIkit.use(Icons);

const test = () => {
  console.log("hello");
};

document.addEventListener("DOMContentLoaded", () => test());

// but you can also use jQuery here
