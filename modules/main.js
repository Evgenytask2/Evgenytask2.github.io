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
import formElements from "./formElements/script.js";

import media from "./projectShare/media.less"; // must be included as the last file


let pugTemplate = require("./root/index.pug");
document.querySelector("#pugTemplate").innerHTML = pugTemplate;

let elems = document.querySelectorAll(".stageChart__clickBox");
for(let elem of elems) 
    elem.onclick = function() {
        for(let e of elems)
             if(this != e)
                e.checked = false;
        }