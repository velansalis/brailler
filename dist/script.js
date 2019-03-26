let dataMapping;
let string = "";
let braille = document.querySelector("#brailleText");
let toast = document.getElementById("toast");

import "./style.css";

// Hindi to Braille Conversion
window.convertToBraille = letter => {
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
};

window.copy = () => {
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

window.splitWords = (hinstring, braillestring) => {
  console.log(hinstring, braillestring);
  let renderString = "";
  let color = ["layer1", "layer2"];
  if (hinstring != undefined || braillestring != undefined) {
    let btext = braillestring.split(" ");
    hinstring.split(" ").forEach((element, index) => {
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
};

window.toggleMenu = () => {
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
  fetch("data/hindi-braille-mapping.json")
    .then(response =>
      response.json().then(data => {
        dataMapping = data;
        braille.innerText = "";
        document.querySelector("#hinditext").innerHTML = "";
        console.log("Hindi JSON loaded..");
      })
    )
    .catch(err => {
      console.log(err);
    });
};
