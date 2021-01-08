var database,form,user;
var Count=0

function setup() {
	createCanvas(1000, 1100);
	form=new Form()
	form.display()
	user=new userData()
	user.getCount()

}

function draw() {
    background("white");
  
 
 
  drawSprites();
 
}


	





