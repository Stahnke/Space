var MaxHealth : int = 0;
var Health : int = 0;

var Explosion : GameObject;
var Target : Transform;

var SendBoss1 : BossHealth;

var MinionType : int;

var Type1 : boolean = false;
var Type2 : boolean = false;
var Type3 : boolean = false;
var Type4 : boolean = false;
var Type5 : boolean = false;
var Type6 : boolean = false;
var Type7 : boolean = false;
var Type8 : boolean = false;

var OkayToDie : boolean = true;

function Start () {

 Health = MaxHealth;
 
}

function TakeDamage(Damage : int){

	Health -= Damage;
	SendBoss1.MinusEventHealth(Damage);
}

function FullHeal(){

	Health = MaxHealth;
}

function Update(){

	if(Health <= 0 && OkayToDie == true)
	{
		var go : GameObject = Spawner.Spawn(Explosion, Target.position, Target.rotation) as GameObject;
		NotOkayToDie();
		End();
	}
	
	if(Type1)
	{
		MinionType = 1;
	}
	else if(Type2)
	{
		MinionType = 2;
	}
	else if(Type3)
	{
		MinionType = 3;
	}
	else if(Type4)
	{
		MinionType = 4;
	}
	else if(Type5)
	{
		MinionType = 5;
	}
	else if(Type6)
	{
		MinionType = 6;
	}
	else if(Type7)
	{
		MinionType = 7;
	}
	else if(Type8)
	{
		MinionType = 8;
	}
}

function End(){

	SendBoss1.MinusHealth();
	SendBoss1.MinionDeath(MinionType);
	Destroy(gameObject);
	
}

function NotOkayToDie(){

	OkayToDie = false;
}