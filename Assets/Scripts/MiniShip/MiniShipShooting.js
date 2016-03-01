var Okay: boolean = true;

var WaitTime : float;

var NormalShot : GameObject;
var ShootPoint : Transform;

function Update() {

	if(Okay)
	{
		WaitTime = 0.1;
		var go1 : GameObject = Spawner.Spawn(NormalShot, ShootPoint.position, ShootPoint.rotation) as GameObject;
		OkayCheck();
	}
}

function OkayCheck(){
	
	Okay = false;
	yield WaitForSeconds(WaitTime);
	Okay = true;
}

