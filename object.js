// 物件 object

//  key     value
//  鍵        值

var person = {
    name:"小白",
    age:23,
    is_male:true,
    print_name:function(){
        document.write(this.name);
    }
};

person.print_name();
