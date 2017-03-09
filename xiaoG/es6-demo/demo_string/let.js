// let是ES6中新增关键字。它的作用类似于var，用来声明变量，但是所声明的变量，只在let命令所在的代码块内有效。
document.write("=================let基本用法=======================<br>"); //正确显示
if (true) {
    var a = 1;
    let b = 2;
}
document.write(a + '<br>'); //正确显示
try {
    document.write(b + "报错"); //报错
} catch (e) {
    alert(e);
}

/**
 * let 引用场景
 * @type {Array}
 */
document.write("=================let引用场景=======================<br>");
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        document.write(i);
        return i;
    };
}
document.write(a[6]());
