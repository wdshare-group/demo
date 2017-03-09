/**
 * includes()：返回布尔值，表示是否找到了参数字符串。
   startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
   endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
 * @type {String}
 */
var str = "Hello world!";
str.startsWith("Hello") // true
str.endsWith("!") // true
str.includes("o") // true
