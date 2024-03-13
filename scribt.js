var opeE =document.getElementById("open")
var cloE =document.getElementById("close")
const loge = document.getElementById("login")
opeE.onclick=function(){
    console.log("heeee")
    loge.style.display="block"
}
cloE.onclick=function(){
    console.log("heeee")
    loge.style.display="none"
}



var iconQ =document.querySelector("#icon-num1")
var menuQ =document.querySelector(".-menu")
var closeE =document.getElementById("closee")


iconQ.onclick=function(){
    menuQ.style.display="block"
}
closeE.onclick=function(){
    menuQ.style.display="none"
}








var btn1 = document.getElementById("img1")
var btn2 = document.getElementById("img2")
var btn3 = document.getElementById("img3")
var cont = document.getElementById("img")



btn1.onclick=function(){
    cont.src='slideshow/1.jpeg';
    btn1.style.backgroundColor="white"
    btn2.style.backgroundColor="transparent"
    btn3.style.backgroundColor="transparent"
}

btn2.onclick=function(){
    cont.src='slideshow/2.jpeg';
    btn1.style.backgroundColor="transparent"
    btn2.style.backgroundColor="white"
    btn3.style.backgroundColor="transparent"
}


btn3.onclick=function(){
    cont.src="slideshow/3.jpeg";
    btn1.style.backgroundColor="transparent"
    btn2.style.backgroundColor="transparent"
    btn3.style.backgroundColor="white"
}




var cont = document.getElementById("img")

const img =["slideshow/1.jpeg","slideshow/2.jpeg","slideshow/3.jpeg"]
i=0

function slideshow(){

    cont.setAttribute("src",img[i])
    if(i == img.length -1 ) {
        i = 0;
    } else {
        i++;
    }
    setTimeout(function() {

        slideshow();
    }, 4000 )


}
slideshow()














