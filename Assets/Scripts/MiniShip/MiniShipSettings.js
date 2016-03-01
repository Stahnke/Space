var Type1 : boolean;
var Type2 : boolean;

var SendShip : MiniShipsSpawning;
var SendSelfDestroy : DestroyObject;

var Alive : int;

var Spark : GameObject;

function OnTriggerEnter(shot : Collider){

	if(shot.tag == "EnemyNormalShot")
	{
	
		var go : GameObject = Spawner.Spawn(Spark, shot.transform.position, shot.transform.rotation) as GameObject;
		
		if(Type1)
		{
		SendShip.Type1Off();
		Destroy(shot.gameObject);
		SendSelfDestroy.End();
		}
	
		if(Type2)
		{
		SendShip.Type2Off();
		Destroy(shot.gameObject);
		SendSelfDestroy.End();
		}
	}
	
	if(shot.tag == "Meteor")
	{
	
		var go2 : GameObject = Spawner.Spawn(Spark, shot.transform.position, shot.transform.rotation) as GameObject;
		
		if(Type1)
		{
		SendShip.Type1Off();
		SendSelfDestroy.End();
		}
	
		if(Type2)
		{
		SendShip.Type2Off();
		SendSelfDestroy.End();
		}
	}
	

}

function Update(){


	Alive = gameObject.Find("ShipAliveObject").transform.position.x;
	
	if(Alive == 0)
	{
		SendSelfDestroy.End();
	}


}
