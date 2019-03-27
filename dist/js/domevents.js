import { textarea, braille } from "./domnodes";

const copy = () => {
  toast.style.height = "40px";
  toast.style.fontSize = "1em";
  window.setTimeout(() => {
    toast.style.height = "0px";
    toast.style.fontSize = "0px";
  }, 3000);
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = braille.innerText;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
};

const download = () => {
  console.log("Downloading");
};

const toggleMenu = () => {
  let elem = document.getElementById("sidenav");
  let body = document.getElementsByTagName("body")[0];
  if (elem.style.width == "4em") {
    elem.style.width = "0em";
    body.style.marginLeft = "0em";
  } else {
    elem.style.width = "4em";
    body.style.marginLeft = "4em";
  }
};

textarea.addEventListener("keydown", autosize);
const autosize = () => {
  this.style.cssText = "height:auto; padding:0";
  this.style.cssText = "-moz-box-sizing:content-box";
  this.style.cssText = "height:" + this.scrollHeight + "px";
};

export { copy, toggleMenu, textarea, download };
