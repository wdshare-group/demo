for (let index of ['a', 'b'].keys()) {
  document.write(index);
}
// 0
// 1
 
document.write("===========values报错了=============="); 
for (let elem of ['a', 'b'].values()) {
  document.write(elem);
}
// 'a'
// 'b'
 
for (let [index, elem] of ['a', 'b'].entries()) {
  document.write(index, elem);
}
// 0 "a"
// 1 "b"