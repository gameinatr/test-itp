import Inputmask from 'inputmask'

const selector = document.querySelector("#phone");
const im = new Inputmask("+(999)-99-9999999");
im.mask(selector);