import { braille } from "./domnodes";
import { dataMapping } from "./loadjson";

const convertToBraille = letter => {
  letter = letter.value;
  let string = "";
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

const splitWords = (hinstring, braillestring) => {
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

export { convertToBraille };
