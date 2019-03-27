import { convertToBraille } from "./js/convert";
import { copy, toggleMenu, download } from "./js/domevents";

// Importing styles
import "./css/fonts.css";
import "./css/menu.css";
import "./css/tooltip.css";
import "./css/util.css";

// Dom Events
window.convertToBraille = convertToBraille; // Convert to Braille click
window.copy = copy; // Copy click
window.download = download; // Download
window.toggleMenu = toggleMenu; // Toggle menu click
