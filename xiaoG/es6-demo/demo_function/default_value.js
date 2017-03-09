function sayHello(name){
    //传统的指定默认参数的方式
    var name = name||'hello world';
    document.write('Hello '+name+'<br>');
}
 
function sayHello2(name='hello world'){
    document.write(`Hello ${name}`+'<br>');
}
sayHello();  //输出：Hello hubwiz
sayHello('ES learning');  //输出：Hello ES learning
sayHello2();  //输出：Hello hubwiz
sayHello2('ES learning');  //输出：Hello ES learning