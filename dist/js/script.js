import { convertToBraille } from "./convert";
import { copy, toggleMenu, download } from "./domevents";

// Importing styles
import "../css/fonts.css";
import "../css/menu.css";
import "../css/tooltip.css";
import "../css/util.css";

window.fromLangText = "";
window.brailleLangText = "";

// Dom Events
window.convertToBraille = convertToBraille; // Convert to Braille click
window.copy = copy; // Copy click
window.download = download; // Download
window.toggleMenu = toggleMenu; // Toggle menu click
