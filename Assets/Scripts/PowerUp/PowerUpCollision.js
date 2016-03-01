
var SendPowerUp : PowerUpDropSettings;

function OnTriggerEnter(Ship : Collider){

	if(Ship.tag == "Ship")
	{
		SendPowerUp.End();
	}

}