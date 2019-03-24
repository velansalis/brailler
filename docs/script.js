let dataMapping;
let string = "";
let braille = document.querySelector("#brailleText");
let indicator = document.querySelector("#checkicon");

fetch("hindi-braille-mapping.json")
  .then(response =>
    response.json().then(data => {
      dataMapping = data;
      console.log("Hindi JSON loaded..");
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
    braille.innerText = "";
  } else {
    splitWords(letter, string);
  }
}

function copy() {
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = braille.innerText;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
}

function splitWords(hinstring, braillestring) {
  let renderString = "";
  let color = ["layer1", "layer2"];
  if (hinstring != undefined || braillestring != undefined) {
    hin = hinstring.split(" ");
    btext = braillestring.split(" ");
    hin.forEach((element, index) => {
      renderString +=
        "<span class='brailleText tool " +
        color[index % 2] +
        "' data-tip=" +
        element +
        ">" +
        btext[index] +
        "</span>";
    });
  }
  braille.innerHTML = renderString;
}

var textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", autosize);
function autosize() {
  var el = this;
  setTimeout(function() {
    el.style.cssText = "height:auto; padding:0";
    el.style.cssText = "-moz-box-sizing:content-box";
    el.style.cssText = "height:" + el.scrollHeight + "px";
  }, 0);
}

window.onload = () => {
  braille.innerText = "";
  document.querySelector("#hinditext").innerHTML = "";
};
