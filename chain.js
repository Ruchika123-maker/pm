class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA=null;
    }

    Launch(bodyA){
        this.chain.bodyA=bodyA;
    }

    display(){
        if(this.chain.bodyA)
		{
			var pointA = this.bodyA.position;
			var pointB = this.pointB
            strokeWeight(2);		
			line(pointA.x, pointA.y, pointB.x, pointB.y);
		}
       
    }
    
}