let dataMapping;
let braille = document.querySelector("#brailleText");
let indicator = document.querySelector(".copyIndicator");
let string = ""; // Variable to hold Braille text

fetch("hindi-braille-mapping.json")
  .then(response =>
    response.json().then(data => {
      dataMapping = data;
      console.log("JSON loaded..");
    })
  )
  .catch(err => {
    console.log(err);
  });

// Hindi to Braille Conversion
function convertToBraille(letter) {
  letter = letter.value;
  string = "";
  for (let i = 0; i < letter.length; i++) {
    try {
      string += dataMapping[0][letter.charAt(i)][0];
    } catch (err) {
      string += letter.charAt(i);
      continue;
    }
  }
  if (letter.length == 0) {
    string = "Braille will display here";
  } else {
    string.replace(" ", "1");
  }
  braille.innerText = string;
}

function copy() {
  indicator.setAttribute("style", "opacity:1;");
  setTimeout(() => {
    indicator.setAttribute("style", "opacity:0;");
  }, 2000);
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = string.split("<br>");
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
}
