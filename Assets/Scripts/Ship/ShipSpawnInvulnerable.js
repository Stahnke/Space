var FlashWait : float = 0.3;
var Counter : int;

var ShipMain : GameObject;
var ShipLeft : GameObject;
var ShipRight : GameObject;

var Fire : GameObject;
var FireTrail : GameObject;


function Start () {
		
	for(Counter = 0; Counter < 5; Counter++){
		ShipMain.active = false;
		ShipLeft.active = false;
		ShipRight.active = false;
		Fire.active = false;
		FireTrail.active = false;
		yield WaitForSeconds(FlashWait);
		ShipMain.active = true;
		ShipLeft.active = true;
		ShipRight.active = true;
		Fire.active = true;
		FireTrail.active = true;
		yield WaitForSeconds(FlashWait);
	}
}
