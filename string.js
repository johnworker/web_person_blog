// 如何使用字串、字串用法
// var phrase = "hello\" Mr.White";
var phrase = "hello Mr.White" + " haha";
var text = "哈哈";
document.write(phrase + text + "嘿嘿");
document.write("<br/>");
// document.write(phrase.toUpperCase());    toUpperCase函數把字母都變成大寫
// document.write(phrase.toLowerCase());    toLowerCase函數把字母都變成大寫
// document.write(phrase.charAt(1));    charAt(1)函數取[變數]字母的第2位字母
// document.write(phrase.indexOf("h"));    indexOf("h")函數取[變數]字母 "h" 的字母在程式裡第幾個位置
// document.write(phrase.substring(0,5));    substring(0,5)函數取[變數]字母 第1~4(第5位的前一個字母)輸出
document.write(phrase.substring(0,5));