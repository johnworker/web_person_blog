// class 

class phone {
    constructor(number, year, is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2021 - this.year;
    }
}

var phone1 = {
    number:"123",
    year:2020,
    is_waterproof:false,
    phone_age:function(){
        return 2021 - this.year;
    }
}

var phone2 = {
    number:"456",
    year:2018,
    is_waterproof:false,
    phone_age:function(){
        return 2021 - this.year;
    }
}

var phone3 = {
    number:"789",
    year:2018,
    is_waterproof:true,
    phone_age:function(){
        return 2021 - this.year;
    }
}