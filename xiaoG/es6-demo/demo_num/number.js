Number.isFinite()//用来检查一个数值是否非无穷（infinity）。
document.writeln("Number.isFinite(15):"+Number.isFinite(15)+'<br>'); // true
document.writeln("Number.isFinite(0.8):"+Number.isFinite(0.8)+'<br>'); // true
document.writeln("Number.isFinite(NaN):"+Number.isFinite(NaN)+'<br>'); // false
document.writeln("Number.isFinite(Infinity):"+Number.isFinite(Infinity)+'<br>'); // false
document.writeln("Number.isFinite(-Infinity):"+Number.isFinite(-Infinity)+'<br>'); // false
document.writeln("Number.isFinite(\"foo\"):"+Number.isFinite("foo")+'<br>'); // false
document.writeln("Number.isFinite(\"15\"):"+Number.isFinite("15")+'<br>'); // false
document.writeln("Number.isFinite(true):"+Number.isFinite(true)+'<br>'); // false

document.writeln("Number.isNaN():"+Number.isNaN()+'<br>')//用来检查一个值是否为NaN。
document.writeln("Number.isNaN(NaN):"+Number.isNaN(NaN)+'<br>'); // true
document.writeln("Number.isNaN(15):"+Number.isNaN(15)+'<br>'); // false
document.writeln("Number.isNaN(\"15\"):"+Number.isNaN("15")+'<br>'); // false
document.writeln("Number.isNaN(true):"+Number.isNaN(true)+'<br>'); // false