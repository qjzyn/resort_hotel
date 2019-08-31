/*首页banner轮播图*/
	var img = document.querySelectorAll(".lunboImg>li");
    var dot = document.querySelectorAll(".lunboBtn>li");
    for (var i = 0; i < dot.length; i++) {
        var btn = dot[i];
        btn.index = i ;
        btn.onmouseover = function(){
            d= this.index;
            className(d);
        }
    }
    var d = 0;
    /*封装类名函数节省代码*/
    function className(n){
        for (var i=0;i<img.length;i++) {
            img[i].className = "";
            dot[i].className = "";
        }
        img[n].className = "show";
        dot[n].className = "on";
    }
    var time = setInterval(function () {
        if (d>=2){
            d = 0;
        }else {
            d++;
        }
        className(d);
    },1600)
 
   /*首页滚动*/
   var Best = document.querySelector(".Best");
    window.onscroll = function () {
        var t = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(t);
        if(t>=50){
     
        	Best.style.top =0;
        }else {
           Best.style.top = 1000 + "px";
        }
	}
    






