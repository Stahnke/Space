var FireBall : boolean = false;
var DoubleShot : boolean = false;
var MiniShips : boolean = false;

var ItemPickUpSoundObject : GameObject;

function End(){
	
	if(FireBall)
	{
		gameObject.Find("Ship").SendMessageUpwards("FireBallOn", 0, SendMessageOptions.DontRequireReceiver);
		var go : GameObject = Spawner.Spawn(ItemPickUpSoundObject, gameObject.transform.position, gameObject.transform.rotation) as GameObject;
	}
	if(DoubleShot)
	{
		gameObject.Find("Ship").SendMessageUpwards("DoubleShotOn", 0, SendMessageOptions.DontRequireReceiver);
		var go2 : GameObject = Spawner.Spawn(ItemPickUpSoundObject, gameObject.transform.position, gameObject.transform.rotation) as GameObject;
	}
	if(MiniShips)
	{
		gameObject.Find("Ship").SendMessageUpwards("SpawnMiniShips", 0, SendMessageOptions.DontRequireReceiver);
		var go3 : GameObject = Spawner.Spawn(ItemPickUpSoundObject, gameObject.transform.position, gameObject.transform.rotation) as GameObject;
	}
	
	Destroy(gameObject);
	
	
}