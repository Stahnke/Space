var Spark : GameObject;
var Flash : GameObject;
var Count : int;

var SendDamage : BossMinionHealth;

function OnTriggerEnter(shot : Collider){
	if(shot.tag == "NormalShot")
	{
		SendDamage.TakeDamage(10);
		var go : GameObject = Spawner.Spawn(Spark, shot.transform.position, shot.transform.rotation) as GameObject;
		var dmg : GameObject = Spawner.Spawn(Flash, gameObject.transform.position, gameObject.transform.rotation) as GameObject;
		Destroy(shot.gameObject);
	}
	
	else if(shot.tag == "FireBall")
	{
		SendDamage.TakeDamage(25);
		Destroy(shot.gameObject);
		SendDamage.TakeDamage(5);
	}
	
	else if(shot.tag == "EnemyNormalShot")
	{
		Destroy(shot.gameObject);
	}
	
	else if(shot.tag == "Ship")
	{
		gameObject.Find("Ship").SendMessageUpwards("TakeDamage", 100, SendMessageOptions.DontRequireReceiver);
	}
}