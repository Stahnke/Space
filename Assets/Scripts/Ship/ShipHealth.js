var MaxHealth : int = 0;
var Health : int = 0;

var NewEnergy : float;
var NewEnergyRounded : int;

var Explosion : GameObject;
var Target : Transform;

var Vulnerable : boolean = false;

var SendEnergy : ShipEnergy;

function Start () {

 Health = MaxHealth;
 Vulernable = false;
 yield WaitForSeconds(3);
 Vulnerable = true;
 
}

function TakeDamage(Damage : int){

	if(Vulnerable)
	{
		Health -= Damage;
		NewEnergy = Damage/5;
		NewEnergyRounded = Mathf.Round(NewEnergy);
		SendEnergy.GainEnergy(NewEnergyRounded);
	}
}

function FullHeal(){

	Health = MaxHealth;
}

function Update(){

	if(Health < 0) ZeroHealth();
	
	gameObject.Find("GUIHealth").SendMessageUpwards("CheckHealth", Health, SendMessageOptions.DontRequireReceiver);

	if(Health <= 0)
	{
		var go : GameObject = Spawner.Spawn(Explosion, Target.position, Target.rotation) as GameObject;
		End();
	}
}

function End(){
	gameObject.Find("CUnlockManager").SendMessageUpwards("SendWeapons", false, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("ShipAliveObject").SendMessageUpwards("ShipDead", 0, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("LifeCounter").SendMessageUpwards("Respawn",0, SendMessageOptions.DontRequireReceiver);
	Destroy(gameObject);
	
}

function Invulernable(){

	Vulnerable = false;
	
	yield WaitForSeconds(8);
	
	Vulnerable = true;

}

function ZeroHealth(){

	Health = 0;
}