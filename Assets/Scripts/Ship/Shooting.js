var WaitTime : float = 0.1;
var PowerUpCounter : int = 0;

var NormalShot : GameObject;
var FireBall : GameObject;

var ShootPoint : Transform;
var ShootPointFire : Transform;
var ShootPointDouble1 : Transform;
var ShootPointDouble2 : Transform;

var NormalOkay : boolean = true;
var FireBallOkay : boolean = false;
var DoubleShotOkay : boolean = false;
var Okay : boolean = true;
var Okay2 : boolean = true;
var SecOkay : boolean = true;
var NormalShotSound : AudioClip;
var FireBallSound : AudioClip;

var Energy : int;

var SendShip : ShipEnergy;

var Weapon0 : int;
var Weapon1 : int;
var Weapon2 : int;
var Weapon3 : int;
var Weapon4 : int;
var CurrentWeapon : int;
var ThisWeapon : int;

//FIX THE POWERUP RESET GLITCH!

function Start(){
	
	TurnOffPowerUp();
}

function Update () {


	if(PowerUpCounter == 0)
	{
		FireBallOkay = false;
		DoubleShotOkay = false;
		NormalOkay = true;
	}
	
	if(PowerUpCounter < 0)
	{
		ZeroPowerUpCounter();
	}

if(Time.timeScale > 0)
{

	if(Input.GetButton("Shoot"))
	{
		if(Okay)
		{
			if(NormalOkay)
			{
				WaitTime = 0.1;
				var go1 : GameObject = Spawner.Spawn(NormalShot, ShootPoint.position, ShootPoint.rotation) as GameObject;
				GetComponent.<AudioSource>().PlayOneShot(NormalShotSound);
				OkayCheck();
			}
		
			if(FireBallOkay)
			{
				WaitTime = 0.3;
				var go2 : GameObject = Spawner.Spawn(FireBall, ShootPointFire.position, ShootPointFire.rotation) as GameObject;
				GetComponent.<AudioSource>().PlayOneShot(FireBallSound);
				OkayCheck();
			}
			
			if(DoubleShotOkay)
			{
				WaitTime = 0.1;
				var go3 : GameObject = Spawner.Spawn(NormalShot, ShootPointDouble1.position, ShootPointDouble1.rotation) as GameObject;
				var go4 : GameObject = Spawner.Spawn(NormalShot, ShootPointDouble2.position, ShootPointDouble2.rotation) as GameObject;
				GetComponent.<AudioSource>().PlayOneShot(NormalShotSound);
				OkayCheck();
			}
		}
	}
		
	else if(Input.GetButton("SecondaryShoot"))
	{
		if(SecOkay)
		{
			if(CurrentWeapon == 0)
			{
				CheckWeapon(Weapon0);
			}
			else if(CurrentWeapon == 1)
			{
				CheckWeapon(Weapon1);
			}
			else if(CurrentWeapon == 2)
			{
				CheckWeapon(Weapon2);
			}
			else if(CurrentWeapon == 3)
			{
				CheckWeapon(Weapon3);
			}
			else if(CurrentWeapon == 4)
			{
				CheckWeapon(Weapon4);
			}
		}
	}
}
}

function AssignWeapon0(Wep0 : int){
	
	Weapon0 = Wep0;
}

function AssignWeapon1(Wep1 : int){
	
	Weapon1 = Wep1;
}

function AssignWeapon2(Wep2 : int){
	
	Weapon2 = Wep2;
}

function AssignWeapon3(Wep3 : int){
	
	Weapon3 = Wep3;
}

function AssignWeapon4(Wep4 : int){
	
	Weapon4 = Wep4;
}

function CheckWeapon(ThisWeapon : int){

	if(ThisWeapon == 1)
	{
		if(Energy >= 10)
		{
			WaitTime = 0.3;
			var go2 : GameObject = Spawner.Spawn(FireBall, ShootPointFire.position, ShootPointFire.rotation) as GameObject;
			GetComponent.<AudioSource>().PlayOneShot(FireBallSound);
			SendShip.UseEnergy(10);
			SecOkayCheck();
			
		}
		//else  Make error noise or something
	}

}

/*===== Weapons List ====

-Weapon0: FireBall

*/

function OkayCheck(){
	
	Okay = false;
	yield WaitForSeconds(WaitTime);
	Okay = true;
}

function SecOkayCheck(){

	SecOkay = false;
	yield WaitForSeconds(WaitTime);
	SecOkay = true;

}

function FireBallOn(){

	PowerUpCounter = 10;
	FireBallOkay = true;
	DoubleShotOkay = false;
	NormalOkay = false;
}

function DoubleShotOn(){

	PowerUpCounter = 10;
	DoubleShotOkay = true;
	FireBallOkay = false;
	NormalOkay = false;
}

function TurnOffPowerUp(){

	while(Okay2)
	{
		yield WaitForSeconds(1);
		PowerUpCounter -= 1;
	}
}

function ZeroPowerUpCounter(){

	PowerUpCounter = 0;
}

function CheckEnergy(E : int){
	
	Energy = E;

}

function CheckCurrentWeapon(C : int){

	CurrentWeapon = C;

}