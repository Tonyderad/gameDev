var enemyList = [];
var ship1 = new Image();
	ship1.src = "ship1.png";

function testEnemy(){
	var enemy = {
		xPos: 0,
		yPos: 0,
		xSpd: 0,
		ySpd: 0,
		type: ship1
	};
	
	enemyList.push(enemy);
}

function testAI(enemy){
	ctx.drawImage(enemy.type, enemy.xPos, enemy.yPos, 32, 32);
	if(shipX > enemy.xPos){
		if(enemy.xSpd < 6)enemy.xSpd += .5;
		enemy.xPos += enemy.xSpd;
	}else if(shipX < enemy.xPos){
		if(enemy.xSpd > -6)enemy.xSpd -= .5;
		enemy.xPos += enemy.xSpd;
	}
	if(shipY > enemy.yPos){
		if(enemy.ySpd < 6)enemy.ySpd += .5;
		enemy.yPos += enemy.ySpd;
	}else if(shipY < enemy.yPos){
		if(enemy.ySpd > -6)enemy.ySpd -= .5;
		enemy.yPos += enemy.ySpd;
	}
}