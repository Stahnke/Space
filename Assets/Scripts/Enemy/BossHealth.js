var MaxHealth : int = 0;
var Health : int = 0;

var MaxEventHealth : int = 0;
var EventHealth : int = 0;

var Explosion : GameObject;
var Target : Transform;

var SendPowerUp : PowerUpDrop;
var SendScore : EnemyScoreValue;

var EnemyOn : boolean = true;
var OkayToDie : boolean = true;

var OkayRotate : boolean = true;
var Okay1 : boolean = true;
var Okay2 : boolean = true;
var rotspeed : float = 60;
var rand : int;

var MoveWaitTime : float = 5;
var SpeedWaitTime : float = 5;
var MaxRand : int = 6;
var CircleAttackRand : int;
var MaxCircleAttackRand : int = 11;

var EnemyHomingShot : GameObject;
var EnemyNormalShot : GameObject;
var MaxHomingAttackRand : int = 6;
var HomingAttackRand : int;

var MinAlive1 : boolean = true;
var MinAlive2 : boolean = true;
var MinAlive3 : boolean = true;
var MinAlive4 : boolean = true;
var MinAlive5 : boolean = true;
var MinAlive6 : boolean = true;
var MinAlive7 : boolean = true;
var MinAlive8 : boolean = true;

var ShootPoint1 : Transform;
var ShootPoint2 : Transform;
var ShootPoint3 : Transform;
var ShootPoint4 : Transform;
var ShootPoint5 : Transform;
var ShootPoint6 : Transform;
var ShootPoint7 : Transform;
var ShootPoint8 : Transform;

var BackShootPoint1 : Transform;
var BackShootPoint2 : Transform;
var BackShootPoint3 : Transform;
var BackShootPoint4 : Transform;
var BackShootPoint5 : Transform;
var BackShootPoint6 : Transform;
var BackShootPoint7 : Transform;
var BackShootPoint8 : Transform;

var SendCircleAttack1 : MinionAttack;
var SendCircleAttack2 : MinionAttack;
var SendCircleAttack3 : MinionAttack;
var SendCircleAttack4 : MinionAttack;
var SendCircleAttack5 : MinionAttack;
var SendCircleAttack6 : MinionAttack;
var SendCircleAttack7 : MinionAttack;
var SendCircleAttack8 : MinionAttack;

function Start () {

	Health = MaxHealth;
	EventHealth = MaxEventHealth;
	Level1Rotate();
	yield WaitForSeconds(7);
	Level1Moving();
	HomingLoop();
}

function Update(){

	if(Health <= 0 && OkayToDie == true)
	{
		var go : GameObject = Spawner.Spawn(Explosion, Target.position, Target.rotation) as GameObject;
		NotOkayToDie();
		End();
	}
	
	if(EventHealth >= 1200 && EventHealth <= 1600)
	{
		rotspeed = 150;
		MoveWaitTime = 3.5;
		SpeedWaitTime = 3;
		MaxCircleAttackRand = 5;
		MaxHomingAttackRand = 5;
		
	}
	
	if(EventHealth >= 600 && EventHealth < 1200)
	{
		rotspeed = 250;
		MoveWaitTime = 3;
		SpeedWaitTime = 2;
		MaxRand = 8;
		MaxCircleAttackRand = 6;
		MaxHomingAttackRand = 6;
	}
	
	if(EventHealth < 600)
	{
		rotspeed = 400;
		MoveWaitTime = 2;
		SpeedWaitTime = 1;
		MaxRand = 10;
		MaxCircleAttackRand = 7;
		MaxHomingAttackRand = 6;
	}
	
	if(EventHealth < 200)
	{
		rotspeed = 800;
		MoveWaitTime = 1.5;
		SpeedWaitTime = 0.75;
		MaxCircleAttackRand = 8;
		MaxHomingAttackRand = 5;
	}
	
	if(CircleAttackRand == 1 && Okay1 == true)
	{
		CircleAttack();
	}
	
	if(HomingAttackRand == 1 && Okay2 == true)
	{
		HomingAttack();
	}
}

function CircleAttack(){

	Okay1 = false;
	CircleAttackRand = 0;
	iTween.MoveTo(gameObject,{"x": 0, "z": 35, "time": SpeedWaitTime});
	yield WaitForSeconds(MoveWaitTime);
	
	if(MinAlive1)
	{
		SendCircleAttack1.MinionCircleAttack();
	}
	if(MinAlive2)
	{
		SendCircleAttack2.MinionCircleAttack();
	}
	if(MinAlive3)
	{
		SendCircleAttack3.MinionCircleAttack();
	}
	if(MinAlive4)
	{
		SendCircleAttack4.MinionCircleAttack();
	}
	if(MinAlive5)
	{
		SendCircleAttack5.MinionCircleAttack();
	}
	if(MinAlive6)
	{
		SendCircleAttack6.MinionCircleAttack();
	}
	if(MinAlive7)
	{
		SendCircleAttack7.MinionCircleAttack();
	}
	if(MinAlive8)
	{
		SendCircleAttack8.MinionCircleAttack();
	}

	yield WaitForSeconds(3);
	
	for(Counter = 0; Counter < 3; Counter++)
	{
		if(MinAlive1)
		{
			var go1 : GameObject = Spawner.Spawn(EnemyNormalShot, BackShootPoint1.position, BackShootPoint1.rotation) as GameObject;
		}
		if(MinAlive2)
		{
			var go2 : GameObject = Spawner.Spawn(EnemyNormalShot, BackShootPoint2.position, BackShootPoint2.rotation) as GameObject;
		}
		if(MinAlive3)
		{
			var go3 : GameObject = Spawner.Spawn(EnemyNormalShot, BackShootPoint3.position, BackShootPoint3.rotation) as GameObject;
		}
		if(MinAlive4)
		{
			var go4 : GameObject = Spawner.Spawn(EnemyNormalShot, BackShootPoint4.position, BackShootPoint4.rotation) as GameObject;
		}
		if(MinAlive5)
		{
			var go5 : GameObject = Spawner.Spawn(EnemyNormalShot, BackShootPoint5.position, BackShootPoint5.rotation) as GameObject;
		}
		if(MinAlive6)
		{
			var go6 : GameObject = Spawner.Spawn(EnemyNormalShot, BackShootPoint6.position, BackShootPoint6.rotation) as GameObject;
		}
		if(MinAlive7)
		{
			var go7 : GameObject = Spawner.Spawn(EnemyNormalShot, BackShootPoint7.position, BackShootPoint7.rotation) as GameObject;
		}
		if(MinAlive8)
		{
			var go8 : GameObject = Spawner.Spawn(EnemyNormalShot, BackShootPoint8.position, BackShootPoint8.rotation) as GameObject;
		}
		yield WaitForSeconds(1);
	}
	
		yield WaitForSeconds(3);
		Okay1 = true;
		Level1Moving();
}

function HomingAttack(){
	
	Okay2 = false;
	HomingAttackRand = 0;

		if(MinAlive1)
		{
			var go1 : GameObject = Spawner.Spawn(EnemyHomingShot, ShootPoint1.position, ShootPoint1.rotation) as GameObject;
		}
		if(MinAlive2)
		{
			var go2 : GameObject = Spawner.Spawn(EnemyHomingShot, ShootPoint2.position, ShootPoint2.rotation) as GameObject;
		}
		if(MinAlive3)
		{
			var go3 : GameObject = Spawner.Spawn(EnemyHomingShot, ShootPoint3.position, ShootPoint3.rotation) as GameObject;
		}
		if(MinAlive4)
		{
			var go4 : GameObject = Spawner.Spawn(EnemyHomingShot, ShootPoint4.position, ShootPoint4.rotation) as GameObject;
		}
		if(MinAlive5)
		{
			var go5 : GameObject = Spawner.Spawn(EnemyHomingShot, ShootPoint5.position, ShootPoint5.rotation) as GameObject;
		}
		if(MinAlive6)
		{
			var go6 : GameObject = Spawner.Spawn(EnemyHomingShot, ShootPoint6.position, ShootPoint6.rotation) as GameObject;
		}
		if(MinAlive7)
		{
			var go7 : GameObject = Spawner.Spawn(EnemyHomingShot, ShootPoint7.position, ShootPoint7.rotation) as GameObject;
		}
		if(MinAlive8)
		{
			var go8 : GameObject = Spawner.Spawn(EnemyHomingShot, ShootPoint8.position, ShootPoint8.rotation) as GameObject;
		}
		
		yield WaitForSeconds(4);
		
		Okay2 = true;
		HomingLoop();
}

function HomingLoop(){

	while(Okay2)
	{
		HomingAttackRand = Random.Range(1,MaxHomingAttackRand);
		yield WaitForSeconds(1);
	}

}

function Level1Moving(){

	while(Okay1)
	{
		rand = Random.Range(1,MaxRand);
		Level1Move();
		yield WaitForSeconds(MoveWaitTime);
		CircleAttackRand = Random.Range(1,MaxCircleAttackRand);
	}
}

function Level1Rotate(){

	while(OkayRotate)
	{
		transform.Rotate(0, rotspeed * Time.deltaTime, 0);
		yield WaitForSeconds(0.01);
	}
}

function Level1Move(){

		if(rand == 1)
		{//Mid
			iTween.MoveTo(gameObject,{"x": 0, "z": 35, "time": SpeedWaitTime});
		}
		
		if(rand == 2)
		{//Left
			iTween.MoveTo(gameObject,{"x": -40, "z": 35, "time": SpeedWaitTime});
		}
		
		if(rand == 3)
		{//Right
			iTween.MoveTo(gameObject,{"x": 40, "z": 35, "time": SpeedWaitTime});
		}
		
		if(rand == 4)
		{//Top
			iTween.MoveTo(gameObject,{"x": 0, "z": 55, "time": SpeedWaitTime});
		}
		
		if(rand == 5)
		{//Bottom
			iTween.MoveTo(gameObject,{"x": 0, "z": 15, "time": SpeedWaitTime});
		}
		if(rand == 6)
		{//Top Right
			iTween.MoveTo(gameObject,{"x": 40, "z": 55, "time": SpeedWaitTime});
		}
		if(rand == 7)
		{//Top Left
			iTween.MoveTo(gameObject,{"x": -40, "z": 55, "time": SpeedWaitTime});
		}
		if(rand == 8)
		{//Bottom Right
			iTween.MoveTo(gameObject,{"x": 40, "z": 15, "time": SpeedWaitTime});
		}
		if(rand == 9)
		{//Bottom Left
			iTween.MoveTo(gameObject,{"x": -40, "z": 15, "time": SpeedWaitTime});
		}

		
		
}

function MinusHealth(){

	Health -= 1;
}

function MinusEventHealth(Damage : int){

	EventHealth -= Damage;
}

function End(){

	SendScore.SendScore();
	gameObject.Find("SpawnController").SendMessageUpwards("MinusBossCount", 0, SendMessageOptions.DontRequireReceiver);
	SendPowerUp.Initiate();
	Destroy(gameObject);
}

function NotOkayToDie(){

	OkayToDie = false;
}

function MinionDeath(MinionType : int){

	if(MinionType == 1)
	{
		MinAlive1 = false;
	}
	if(MinionType == 2)
	{
		MinAlive2 = false;
	}
	if(MinionType == 3)
	{
		MinAlive3 = false;
	}
	if(MinionType == 4)
	{
		MinAlive4 = false;
	}
	if(MinionType == 5)
	{
		MinAlive5 = false;
	}
	if(MinionType == 6)
	{
		MinAlive6 = false;
	}
	if(MinionType == 7)
	{
		MinAlive7 = false;
	}
	if(MinionType == 8)
	{
		MinAlive8 = false;
	}

}