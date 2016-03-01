var WaitTimeRange : int = 5;
var WaitTime : float;
var WaitTimeRatio : float = 0.5;
var MiniWaitTime : float = 0.2;
var ShootOkay : boolean = true;
var ConstantShootOkay : boolean = false;
var EnemyShootPoint : Transform;
var EnemyNormalShot : GameObject;
var ShootCounter : int;
var ShootCounterRangeMin : int = 4;
var ShootCounterRangeMax : int = 6;

var EnemyShotSound : AudioClip;


function Start(){


	while(ShootOkay == true)
	{
		if(Time.timeScale > 0)
		{
		WaitTime = Random.Range(2,WaitTimeRange);
		ShootCounter = Random.Range(ShootCounterRangeMin, ShootCounterRangeMax);
		WaitTime *= WaitTimeRatio;
		yield WaitForSeconds(WaitTime);
		Shoot();
		}
	}
	
	while(ConstantShootOkay == true)
	{
		if(Time.timeScale > 0)
		{
		var go : GameObject = Spawner.Spawn(EnemyNormalShot, EnemyShootPoint.position, EnemyShootPoint.rotation) as GameObject;
		GetComponent.<AudioSource>().PlayOneShot(EnemyShotSound);
		yield WaitForSeconds(MiniWaitTime);
		}
	}

}

function Shoot(){

	while(ShootCounter > 0)
	{
		var go : GameObject = Spawner.Spawn(EnemyNormalShot, EnemyShootPoint.position, EnemyShootPoint.rotation) as GameObject;
		GetComponent.<AudioSource>().PlayOneShot(EnemyShotSound);
		yield WaitForSeconds(MiniWaitTime);
		ShootCounterMinus();
	}
}

function ShootCounterMinus(){

	ShootCounter -= 1;
}