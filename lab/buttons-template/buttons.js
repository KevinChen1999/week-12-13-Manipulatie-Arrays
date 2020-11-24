var image = document.getElementById('image');

var button1 = document.getElementById('button_1');
var button2 = document.getElementById('button_2');
var button3 = document.getElementById('button_3');

var trio = document.getElementById("trioNumber");

var counterbutton1 = 0;
var counterbutton2 = 0;
var counterbutton3 = 0;


button1.addEventListener("click", function(){
	counterbutton1++;
	image.src = "images/bg1.jpg"
	button1.innerText = counterbutton1;
	trio.src ="images/1.jpg";
});
button2.addEventListener("click", function(){
	counterbutton2++;
	image.src = "images/bg2.jpg"
	button2.innerText = counterbutton2;
	trio.src ="images/2.jpg";
});
button3.addEventListener("click", function(){
	counterbutton3++;
	image.src = "images/bg3.jpg"	
	button3.innerText = counterbutton3;
	trio.src ="images/3.jpg";
});