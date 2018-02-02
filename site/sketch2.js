var a;
var g;
var chain;

function setup(){
	c = createCanvas(480,480);
	chain = new Chain(0,0);
	chain.init();
}


function draw(){
	background(myColors.c1);
	noFill();
	push();
	translate(width/8,height/4);
	scale(2);
	chain.displayDots();

	chain.displayLine();
	chain.update();
	pop();
}


function Chain(x,y){
	this.x = x;
	this.y = y;
	this.radius=8;
	this.points = [];
}

Chain.prototype.init = function(){
	//populate the points from within initialization
var xMargin = width / 16;
var yMargin = height / 16;

var x = [];
var y = [];
//populate the arrays with the grid values
for (i = 0; i <5; i++){
		x.push((i*width/16)+xMargin*2 );
		//y.push((i*height/16)+yMargin*2 );
}

//randomize them
shuffle(x,true);
shuffle(y,true);

console.log(x, y);

//populate the global array with those values
// for (i = 0 ; i < 9 ; i++){
// 	this.positions.push([x[i],y[i]]);
// };
	var r2 = this.radius*2;

	this.points.push(createVector(x[0],0));
	this.points.push(createVector(x[1],r2))//this.radius+(this.radius*2)));
	this.points.push(createVector(x[2],r2*2))//this.radius*2+(this.radius*2)));
	this.points.push(createVector(x[3],r2*3))//this.radius*3+(this.radius*2)));
}

Chain.prototype.displayDots = function(){
	for (var i = 0; i< this.points.length; i++){
		ellipse(this.points[i].x,this.points[i].y,this.radius,this.radius);
	}

};

Chain.prototype.displayLine = function(){

	var p = this.points;
	var r = this.radius;
	var r2 = this.radius*2;

	strokeWeight(map(mouseX,0,width,5,100) );

	beginShape();

	vertex(p[0].x-r,p[0].y);
	
	bezierVertex(p[0].x-r , p[0].y-r , p[0].x , p[0].y-r , p[0].x , p[0].y-r );
	bezierVertex(p[0].x , p[0].y-r , p[0].x+r , p[0].y-r , p[0].x+ r, p[0].y );
	bezierVertex(p[0].x+r , p[0].y , p[0].x+r , p[0].y+r , p[0].x , p[0].y+r );

	vertex(p[0].x,p[0].y+r);

	bezierVertex(p[1].x-r , p[1].y-r , p[1].x , p[1].y-r , p[1].x , p[1].y-r );
	bezierVertex(p[1].x , p[1].y-r , p[1].x-r , p[1].y-r , p[1].x-r, p[1].y );
	bezierVertex(p[1].x-r , p[1].y , p[1].x-r , p[1].y+r , p[1].x , p[1].y+r );

	vertex(p[1].x,p[1].y+r);

	bezierVertex(p[2].x-r , p[2].y-r , p[2].x , p[2].y-r , p[2].x , p[2].y-r );
	bezierVertex(p[2].x , p[2].y-r , p[2].x+r , p[2].y-r , p[2].x+r, p[2].y );
	bezierVertex(p[2].x+r , p[2].y , p[2].x+r , p[2].y+r , p[2].x , p[2].y+r );

	vertex(p[3].x,p[3].y-r);

	bezierVertex(p[3].x , p[3].y-r , p[3].x+r , p[3].y-r , p[3].x+ r, p[3].y );
	bezierVertex(p[3].x+r , p[3].y , p[3].x+r , p[3].y+r , p[3].x , p[3].y+r );

	endShape();



}

Chain.prototype.update = function(){
	this.radius = map(mouseX,0,width,5,100) || 10;
	for (var i = 0;i<this.points.length;i++){
		this.points[i].x += Math.sin(frameCount*.05 + i );
		this.points[i].y = (this.radius*2)*i;
	}
	// this.points.forEach(function(point, i){
	// 	point.x += Math.sin(frameCount*.05 + i );

	// })

}

function mousePressed(){
	console.log(c);
}