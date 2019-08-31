var Navigation = document.querySelector(".zyn-Navigation-bar");
	window.onscroll = function(){
		var t = document.body.scrollTop || document.documentElement.scrollTop;
		console.log(t);
		if(t>=50){
			Navigation.style.top =0;
		}else{
			Navigation.style.top = 120+"px";
		}
}
