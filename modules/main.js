let req;
try {
    req = require.context("./projectShare/fonts", true, /\.(?:eot|svg|ttf|woff)$/im);
    req.keys().forEach((key) => req(key)); 
} catch(ex) {} 

let pugTemplate = require("./root/index.pug");
document.querySelector("#pugTemplate").innerHTML = pugTemplate;

import root from "./root/script.js";
import standardBtns from "./standardBtns/script.js";
import arrowBtns from "./arrowBtns/script.js";
import circleDiagrams from "./percentages/script.js";
import sliders from "./sliders/script.js";
import stages from "./stages/script.js";
import formElements from "./formElements/script.js";
import switches from "./switches/script.js";
import search from "./searchTools/script.js";
import userProfile from "./userProfile/script.js";
import news from "./news/script.js";
import events from "./events/script.js";
import location from "./location/script.js";
import calendar from "./calendar/script.js";
import messaging from "./messaging/script.js";
import video from "./video/script.js";

import media from "./projectShare/media.less"; // must be included as the last file

