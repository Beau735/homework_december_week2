// Tell ESLint that about global variables.
/* global dialogPolyfill: false */

// eslint-disable-next-line no-unused-vars
let dialog; // accessed in index.html

window.onload = () => {
    dialog = document.querySelector('dialog');
    dialogPolyfill.registerDialog(dialog);
};