//set canvas to window size
var h;
var w;

// var canvas;

var gif_loadImg, gif_createImg;

var frame = 0;
console.log("Change");

function preload() {
	gif_createImg = createImg("assets/background1.gif");
}

//initialize canvas
function setup() {
	h = window.innerHeight * 1.2;
	w = window.innerWidth;
  	canvas = createCanvas(w, h);
	// don't really know if this is necessary
	// canvas.style('z-index', '-2');
  	canvas.parent("canv");
	
	// deleted background, dunno if I should or not
	// background.style('z-index', '-2');
}

function draw() {
	background('rgba(0,0,0, 0.6)');
	/*gif_createImg.resize(0, h);
	gif_createImg.position(0, 0);
	gif_createImg.style('z-index', '-3');*/
}

window.onresize = function() {
	h = window.innerHeight * 1.2;
	w = window.innerWidth;
	canvas.resize(w, h);
	// gif_createImg.resize(w, h);
}