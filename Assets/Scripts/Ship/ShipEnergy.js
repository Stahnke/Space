var Energy : int = 100;
var MaxEnergy : int = 100;

var SendShip : Shooting;

function Start () {

	MaxOutEnergy();
}

function Update () {

	if(Energy < 0)
	{
		ZeroEnergy();
	}
	
	if(Energy > MaxEnergy) MaxOutEnergy();
	
	gameObject.Find("GUIEnergy").SendMessageUpwards("CheckEnergy", Energy, SendMessageOptions.DontRequireReceiver);
	SendShip.CheckEnergy(Energy);
}

function UseEnergy(UsedEnergy : int){

	Energy -= UsedEnergy;

}

function GainEnergy(NewEnergy : int){

	Energy += NewEnergy;

}

function MaxOutEnergy(){

	Energy = MaxEnergy;
}

function ZeroEnergy(){

	Energy = 0;
}