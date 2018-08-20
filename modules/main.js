let req;
try {
    req = require.context("./projectShare/fonts", true, /\.(?:eot|svg|ttf|woff)$/im);
    req.keys().forEach((key) => req(key)); 
} catch(ex) {} 




let pugTemplate = require("./root/index.pug");
document.querySelector("#pugTemplate").innerHTML = pugTemplate;

console.log("Javascript entry point log");