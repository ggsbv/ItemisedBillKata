"use strict";

module.exports = function(string){
  var array = string.split(/[hms]/);
  return Number(array[0]*3600) + Number(array[1]*60) + Number(array[2]);
}
