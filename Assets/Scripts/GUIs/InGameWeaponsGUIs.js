var Weapon0 : int;
var Weapon1 : int;
var Weapon2 : int;
var Weapon3 : int;
var Weapon4 : int;

var Skin : GameObject;
var Skin0 : GameObject;
var Skin1 : GameObject;

var SpawnSlot : Transform;
var SpawnSlot0 : Transform;
var SpawnSlot1 : Transform;
var SpawnSlot2 : Transform;
var SpawnSlot3 : Transform;
var SpawnSlot4 : Transform;

//Dont forget to Create the actual GUIs so you can fully test it :D
// The GUis of this will be the same as the ones in the selection screen, so make that script next

function Start(){

	gameObject.Find("CUnlockManager").SendMessageUpwards("SendGUIWeapons", SendMessageOptions.DontRequireReceiver);

}

function GUIWeapon0(Wep0 : int){
	
	Weapon0 = Wep0;
	SpawnSlot = SpawnSlot0;
	AssignGUIs(Weapon0);
}

function GUIWeapon1(Wep1 : int){
	
	Weapon1 = Wep1;
	SpawnSlot = SpawnSlot1;
	AssignGUIs(Weapon1);
}

function GUIWeapon2(Wep2 : int){
	
	Weapon2 = Wep2;
	SpawnSlot = SpawnSlot2;
	AssignGUIs(Weapon2);
}

function GUIWeapon3(Wep3 : int){
	
	Weapon3 = Wep3;
	SpawnSlot = SpawnSlot3;
	AssignGUIs(Weapon3);
}

function GUIWeapon4(Wep4 : int){
	
	Weapon4 = Wep4;
	SpawnSlot = SpawnSlot4;
	AssignGUIs(Weapon4);
}

function AssignGUIs(CurrentWeapon : int){

	if(CurrentWeapon == 0)
	{
		Skin = Skin0;
	}
	else if(CurrentWeapon == 1)
	{
		Skin = Skin1;
	}
	
	var go = Spawner.Spawn(Skin, SpawnSlot.position, SpawnSlot.rotation) as GameObject;

}

