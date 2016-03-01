var Spark : GameObject;

var SendDamage : ShipHealth;

function OnTriggerStay(shot : Collider){

	if(shot.tag == "EnemyNormalShot")
	{
		SendDamage.TakeDamage(20);
		var go : GameObject = Spawner.Spawn(Spark, shot.transform.position, shot.transform.rotation) as GameObject;
		Destroy(shot.gameObject);
	}
	
	if(shot.tag == "Meteor")
	{
		SendDamage.TakeDamage(1000);
		var go2 : GameObject = Spawner.Spawn(Spark, shot.transform.position, shot.transform.rotation) as GameObject;
	}
}