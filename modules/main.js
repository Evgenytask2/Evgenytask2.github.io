let req;
try {
    req = require.context("./projectShare/fonts", true, /\.(?:eot|svg|ttf|woff)$/im);
    req.keys().forEach((key) => req(key)); 
} catch(ex) {} 

import root from "./root/script.js";
import standardBtns from "./standardBtns/script.js";
import arrowBtns from "./arrowBtns/script.js";
import circleDiagrams from "./percentages/script.js";
import sliders from "./sliders/script.js";
import stages from "./stages/script.js";

import media from "./projectShare/media.less"; // must be included as the last file


let pugTemplate = require("./root/index.pug");
document.querySelector("#pugTemplate").innerHTML = pugTemplate;

console.log("Javascript entry point log");