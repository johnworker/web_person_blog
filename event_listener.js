// event listener

// function handle_click(element){
//     // alert("叫你按就按阿?");
//     element.innerText = "按屁阿";
//     element.style.color = "red";
// }

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    // alert("叫你按就按啊?");
    this.innerText = "按屁阿";
    this.style.color = "red";
})

var img = document.getElementById("img");
img.addEventListener("mouseover", function(){
    this.src = "./img/picture2.jpg";
})

img.addEventListener("mouseout", function(){
    this.src = "./img/picture1.jpg";
})