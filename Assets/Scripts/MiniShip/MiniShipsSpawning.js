var MiniShipT1 : GameObject;
var MiniShipT2 : GameObject;

var SpawnPoint1 : Transform;
var SpawnPoint2 : Transform;
var SpawnPoint3 : Transform;
var SpawnPoint4 : Transform;

var MiniShipType1 : boolean = false;
var MiniShipType2 : boolean = false;

function SpawnMiniShips(){

	if(MiniShipType1 == true && MiniShipType2 == false){
	
		var go3 : GameObject = Spawner.Spawn(MiniShipT2, SpawnPoint3.position, SpawnPoint3.rotation) as GameObject;
		var go4 : GameObject = Spawner.Spawn(MiniShipT2, SpawnPoint4.position, SpawnPoint4.rotation) as GameObject;
		Type2On();
	}

	if(MiniShipType1 == false){
	
		var go1 : GameObject = Spawner.Spawn(MiniShipT1, SpawnPoint1.position, SpawnPoint1.rotation) as GameObject;
		var go2 : GameObject = Spawner.Spawn(MiniShipT1, SpawnPoint2.position, SpawnPoint2.rotation) as GameObject;
		Type1On();
	}
}

function Type1On(){
	
	MiniShipType1 = true;

}

function Type1Off(){

	MiniShipType1 = false;
}

function Type2On(){
	
	MiniShipType2 = true;

}

function Type2Off(){
	
	MiniShipType2 = false;

}
