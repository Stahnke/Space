var WaitTime : float = 1;
var Explosion : GameObject;
var ExplosionOkay : boolean = false;

function Start () {

	yield WaitForSeconds(WaitTime);
	if(ExplosionOkay) var go : GameObject = Spawner.Spawn(Explosion, gameObject.transform.position, gameObject.transform.rotation) as GameObject;
	Destroy(gameObject);
	
}

