
function Start () {

	gameObject.name = "Ship";
	gameObject.Find("CUnlockManager").SendMessageUpwards("SendWeapons", true, SendMessageOptions.DontRequireReceiver);	
	gameObject.Find("ShipAliveObject").SendMessageUpwards("ShipAlive", 0, SendMessageOptions.DontRequireReceiver);
	
}

