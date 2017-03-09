let propKey = 'foo';
 
let obj = {
   [propKey]: true,
   ['a'+'bc']: 123
};
document.write("let obj = {[propKey]: true,['a'+'bc']: 123};===="+obj.abc+"===<br>")
document.write("let obj = {[propKey]: true,['a'+'bc']: 123};===="+obj.foo+"===<br>")