var Spark : GameObject;
var Fire : GameObject;

var BurnPoint1 : Transform;
var BurnPoint2 : Transform;

var Count : int;

var SendDamage : Health;

function OnTriggerEnter(shot : Collider){
	if(shot.tag == "NormalShot")
	{
		SendDamage.TakeDamage(10);
		var go : GameObject = Spawner.Spawn(Spark, shot.transform.position, shot.transform.rotation) as GameObject;
		Destroy(shot.gameObject);
	}
	
	else if(shot.tag == "FireBall")
	{
		SendDamage.TakeDamage(25);
		Destroy(shot.gameObject);
		for(Count = 0; Count < 15; Count++)
		{
			if(Count == 0 || Count == 5 || Count == 10)
			{
				var go3 : GameObject = Spawner.Spawn(Fire, BurnPoint1.position, BurnPoint1.rotation) as GameObject;
				var go4 : GameObject = Spawner.Spawn(Fire, BurnPoint2.position, BurnPoint2.rotation) as GameObject;
			}
			SendDamage.TakeDamage(5);
			yield WaitForSeconds(0.4);	
		}	
	}
	
	else if(shot.tag == "EnemyNormalShot")
	{
		Destroy(shot.gameObject);
	}
	
	else if(shot.tag == "Ship")
	{
		gameObject.Find("Ship").SendMessageUpwards("TakeDamage", 1000, SendMessageOptions.DontRequireReceiver);
	}
}