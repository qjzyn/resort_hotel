var js = document.querySelector(".js");
var i = 0;
var time;
js.onmouseover = function () {
    time = setInterval(function () {
            i++;
            js.innerHTML = i;
    },2)
};
var time = setInterval(function(){nextImg();});
function nextImg() {
    if(i >1024){
        i = 0; 
        clearInterval(time);
    }else if(i <1024){
        i++;
    }else if(i >1024){
        clearInterval(time);
    }else{
    	console.log(time);
    }
}















