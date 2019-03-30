import { braille, fromLang } from "./domnodes";
let dataMapping = {};
let url =
  "https://gist.githubusercontent.com/velansalis/a467db04321a29414cd87e04b0c901d1/raw/4ad3677f9ac3397b52039cb6f367b923896e1e5f/hindi-to-braille-mapping.json";

window.onload = async () => {
  await fetch(url)
    .then(response =>
      response.json().then(data => {
        dataMapping = data;
        braille.innerText = "";
        fromLang.innerHTML = "";
        console.log("JSON loaded");
      })
    )
    .catch(err => {
      console.log(err);
    });
};

export { dataMapping };
