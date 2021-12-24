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
	canvas.style('display', 'block');
	// canvas.style('z-index', '-2');
  	canvas.parent("canv");
	// background(0);
	// background.style('z-index', '-2');
}

function draw() {
	// loads only first frame
	// image(gif_loadImg, 50, 50);
	
	// updates animation frames by using an html
	// img element, positioning it over top of
	// the canvas.
	gif_createImg.position(0, 0);
	gif_createImg.style('z-index', '-2');
}

window.onresize = function() {
	h = window.innerHeight * 1.2;
	w = window.innerWidth;
	canvas.resize(w, h);
	// gif_createImg.resize(w, h);
}