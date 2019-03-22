let dataMapping;
let braille = document.querySelector("#brailleText");

fetch("hindi-braille-mapping.json")
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
    if (i % 20 == 0 && i != 0) string += "<br>";
  }
  console.log(letter + " - " + string);
  braille.innerHTML = string;
}
