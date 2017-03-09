let set = new Set(['red', 'green', 'blue']);
 
for ( let item of set.keys() ){
  document.write(item+'<br>');
}
document.write("===========================<br>");
// red
// green
// blue
 
for ( let item of set.values() ){
  document.write(item+'<br>');
}
// red
// green
// blue
document.write("===========================<br>"); 
for ( let item of set.entries() ){
  document.write(item+'<br>');
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
document.write("===========================<br>"); 
set.forEach(function(item){
    document.write(item+'<br>');
})