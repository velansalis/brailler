let dataMapping = {};
let gistid = "a467db04321a29414cd87e04b0c901d1";
let json_name = "hin_to_brl.json";

window.onload = () => {
  fetch(json_name)
    .then(response => response.json())
    .then(myJson => {
      console.log("Json loaded");
      dataMapping = myJson;
    })
    .catch(err => console.err(err));
};

const getJsonFromGit = () => {
  fetch("https://api.github.com/gists/" + gistid)
    .then(response => response.json())
    .then(myJson => {
      console.log("Loaded");
      dataMapping = JSON.parse(
        myJson.files[Object.keys(myJson.files)[0]].content
      );
      return dataMapping;
    })
    .catch(err => console.err(err));
};

const getJsonFromLocal = () => {
  fetch(json_name)
    .then(response => response.json())
    .then(myJson => {
      return myJson;
    })
    .catch(err => console.err(err));
};

export { dataMapping };
