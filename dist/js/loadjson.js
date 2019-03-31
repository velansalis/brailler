import { braille, fromLang } from "./domnodes";
let dataMapping = {};
let gistid = "a467db04321a29414cd87e04b0c901d1";

window.onload = () => {
  fetch("https://api.github.com/gists/" + gistid)
    .then(response => response.json())
    .then(myJson => {
      console.log("Loaded");
      dataMapping = JSON.parse(
        myJson.files[Object.keys(myJson.files)[0]].content
      );
    })
    .catch(err => console.err(err));
};

export { dataMapping };
