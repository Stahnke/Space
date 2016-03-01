var MaxHealth : int = 0;
var Health : int = 0;

var Explosion : GameObject;
var Target : Transform;

var SendPowerUp : PowerUpDrop;
var SendScore : EnemyScoreValue;

var EnemyOn : boolean = true;
var OkayToDie : boolean = true;

function Start () {

 Health = MaxHealth;
 
}

function TakeDamage(Damage : int){

	Health -= Damage;
	
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
}

function End(){
	if(EnemyOn)
	{
		SendScore.SendScore();
		gameObject.Find("SpawnController").SendMessageUpwards("MinusEnemyCount", 0, SendMessageOptions.DontRequireReceiver);
	}
	SendPowerUp.Initiate();
	Destroy(gameObject);
	
}

//this is here because there is a 0.2 second delay between 0 health, and actually death because of the explosion animation.
// without this boolean, the enemy could die more than once, causing a glitch in the enemycount system

function NotOkayToDie(){

	OkayToDie = false;
}