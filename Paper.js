class paper
{
	constructor(x,y)
	{var options = {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }
    this.body = Bodies.circle(x, y,10, options);
    this.image = loadImage("paper.png");
    World.add(world, this.body);
    
		

	}
	display()
	{
        image(this.image, 200, 630,30,30);
        
	}

}