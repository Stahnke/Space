var Explosion : GameObject;
var ExplosionOn : boolean = true;

function End(){

	Destroy(gameObject);
	if(ExplosionOn)
	{
		var go : GameObject = Spawner.Spawn(Explosion, gameObject.transform.position, gameObject.transform.rotation) as GameObject;
	}
}