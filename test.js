var lodash = require('lodash');
var colors = require('colors');

var output = lodash.without([1,2,3,4],1);
console.log(output);
exports.printMsg = function(){
    console.log("A test log from Danny" .red);
};