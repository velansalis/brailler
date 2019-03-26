import { convertToBraille } from "./js/convert";
import { copy, toggleMenu } from "./js/domevents";
import "./css/style.css";

// Dom Events
window.convertToBraille = convertToBraille; // Convert to Braille click
window.copy = copy; // Copy click
window.toggleMenu = toggleMenu; // Toggle menu click
