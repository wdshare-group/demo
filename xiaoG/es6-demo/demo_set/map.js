var m = new Map();
 
m.set("edition", 6)        // 键是字符串
m.set(262, "standard")     // 键是数值
m.set(undefined, "nah")    // 键是undefined
 
var hello = function() {document.write("hello");}
m.set(hello, "Hello ES6!") // 键是函数
 
document.write("hello："+m.has("edition")+'<br>')     // true
document.write("hello："+m.has("years")+'<br>')       // false
document.write("hello："+m.has(262)+'<br>')             // true
document.write("hello："+m.has(undefined)+'<br>')       // true
document.write("hello："+m.has(hello) +'<br>')          // true
 
document.write("hello："+m.delete(undefined)+'<br>')  
document.write("hello："+m.has(undefined)  +'<br>')       // false
 
document.write("hello："+m.get(hello) +'<br>')   // Hello ES6!
document.write("hello："+m.get("edition")+'<br>')    // 6