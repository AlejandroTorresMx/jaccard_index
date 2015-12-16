// https://en.wikipedia.org/wiki/Jaccard_index
function jaccard_index (array1, array2){
   // intersect arrays
   var intersection = array2.filter(function(i) {return array1.indexOf(i) > -1}).length
   // merge and get unique
   var unique = array1.concat(array2.filter(function (v) {return array1.indexOf(v) < 0;})).length;
   // return index
   return intersection / unique
}

console.log ( jaccard_index(["hello","world"], ['world',"hello","javascript"]) )
