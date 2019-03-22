let dataMapping;
let braille = document.querySelector("#brailleText");
let string = "";
let indicator = document.querySelector(".copyIndicator");

fetch("../_data/hindi-braille-mapping.json")
  .then(response =>
    response.json().then(data => {
      dataMapping = data;
    })
  )
  .catch(err => {
    console.log(err);
  });

// Auto Expanding Textarea
var textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", autosize);
function autosize() {
  var el = this;
  setTimeout(function() {
    el.style.cssText = "height:auto; padding:0";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
}

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
    if (i % 29 == 0 && i != 0) string += "<br>";
  }
  if (letter.length == 0) string = "Braille will display here";
  braille.innerHTML = string;
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

window.onload = () => {
  braille.innerHTML = "Braille will display here";
};
