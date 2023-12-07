const information = require('./information');


var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `This is me: ${information.myself.surname} campus: ${information.myself.campus}`,
    e : "oO",
    T : "U "
}));