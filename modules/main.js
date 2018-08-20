let req;
try {
    req = require.context("./projectShare/fonts", true, /\.(?:eot|svg|ttf|woff)$/im);
    req.keys().forEach((key) => req(key)); 
} catch(ex) {} 

import root from "./root/script.js";
import standardBtns from "./standardBtns/script.js";

import media from "./projectShare/media.less";


let pugTemplate = require("./root/index.pug");
document.querySelector("#pugTemplate").innerHTML = pugTemplate;

console.log("Javascript entry point log");