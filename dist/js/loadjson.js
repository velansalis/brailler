import { braille, fromLang } from "./domnodes";
let dataMapping;

window.onload = () => {
  fetch("data/hindi-braille-mapping.json")
    .then(response =>
      response.json().then(data => {
        dataMapping = data;
        braille.innerText = "";
        fromLang.innerHTML = "";
        console.log("Hindi JSON loaded..");
      })
    )
    .catch(err => {
      console.log(err);
    });
};

export { dataMapping };
