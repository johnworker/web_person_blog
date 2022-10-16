// 函式 function

function hello(name,age){
    document.write("你好" + name + "你今年" + age + "歲");
}

function add(num1,num2){
    document.write(num1 + num2);
    // 函式遇到return就會處理完跳出
    // return num1 + num2;
}

hello("小白","32");
add(3,6);
// document.write( add(3,6));