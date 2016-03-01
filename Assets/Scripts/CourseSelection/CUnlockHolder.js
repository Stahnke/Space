var C1Unlock : boolean = false;
var C2Unlock : boolean = false;
var C3Unlock : boolean = false;
var C4Unlock : boolean = false;
var C5Unlock : boolean = false;
var C102Unlock : boolean = false;
var C103Unlock : boolean = false;

var W2Unlock : boolean = false;
var W3Unlock : boolean = false;
var W4Unlock : boolean = false;

var Lives : int;
var CurrentCourse : int;

var Weapon0 : int;
var Weapon1 : int;
var Weapon2 : int;
var Weapon3 : int;
var Weapon4 : int;

// ====Course Unlocks====================

function SendUnlocks(){
	
	if(C1Unlock) gameObject.Find("MenuManager").SendMessageUpwards("GetCUnlock", 1, SendMessageOptions.DontRequireReceiver);
	if(C2Unlock) gameObject.Find("MenuManager").SendMessageUpwards("GetCUnlock", 2, SendMessageOptions.DontRequireReceiver);
	if(C3Unlock) gameObject.Find("MenuManager").SendMessageUpwards("GetCUnlock", 3, SendMessageOptions.DontRequireReceiver);
	if(C4Unlock) gameObject.Find("MenuManager").SendMessageUpwards("GetCUnlock", 4, SendMessageOptions.DontRequireReceiver);
	if(C5Unlock) gameObject.Find("MenuManager").SendMessageUpwards("GetCUnlock", 5, SendMessageOptions.DontRequireReceiver);
	if(C102Unlock) gameObject.Find("MenuManager").SendMessageUpwards("GetCUnlock", 102, SendMessageOptions.DontRequireReceiver);
	if(C103Unlock) gameObject.Find("MenuManager").SendMessageUpwards("GetCUnlock", 103, SendMessageOptions.DontRequireReceiver);
}

function SendWeaponUnlocks(){
	
	if(W2Unlock) gameObject.Find("WeaponsMenu").SendMessageUpwards("GetUnlocks", 2, SendMessageOptions.DontRequireReceiver);
	if(W3Unlock) gameObject.Find("WeaponsMenu").SendMessageUpwards("GetUnlocks", 3, SendMessageOptions.DontRequireReceiver);
	if(W4Unlock) gameObject.Find("WeaponsMenu").SendMessageUpwards("GetUnlocks", 4, SendMessageOptions.DontRequireReceiver);
}

function CUnlock(Num : int){

	if(Num == 1)
	{
		C1Unlock = true;
	}
	if(Num == 2)
	{
		C2Unlock = true;
	}
	if(Num == 3)
	{
		C3Unlock = true;
	}
	if(Num == 4)
	{
		C4Unlock = true;
	}
	if(Num == 5)
	{
		C5Unlock = true;
	}
	if(Num == 102)
	{
		C102Unlock = true;
	}
	if(Num == 103)
	{
		C103Unlock = true;
	}
}

function WUnlock(WNum : int){

	if(WNum == 1)
	{
		W2Unlock = true;
	}
	if(WNum == 2)
	{
		W3Unlock = true;
	}
	if(WNum == 3)
	{
		W4Unlock = true;
	}
}

//===== Current Course =================

function GetCurrentCourse(Course : int){
	
	CurrentCourse = Course;
}

function SendCurrentCourse(){

	gameObject.Find("MenuManager").SendMessageUpwards("RetainCourse", CurrentCourse, SendMessageOptions.DontRequireReceiver);
}

function SendCurrentCourseToSpawn(){

	gameObject.Find("SpawnController").SendMessageUpwards("GetCurrentCourse", CurrentCourse, SendMessageOptions.DontRequireReceiver);
}

function CheckRAmt(RAmt : int){
	
	Lives = RAmt;
}

function SendLivesAmount(){
	
	gameObject.Find("LifeCounter").SendMessageUpwards("GetLivesAmount", Lives, SendMessageOptions.DontRequireReceiver);

}

//======= Assigned Weapons ===============

function GetWeapon0(Wep0 : int){

	Weapon0 = Wep0;

}
function GetWeapon1(Wep1 : int){

	Weapon1 = Wep1;

}
function GetWeapon2(Wep2 : int){

	Weapon2 = Wep2;

}
function GetWeapon3(Wep3 : int){

	Weapon3 = Wep3;

}
function GetWeapon4(Wep4 : int){

	Weapon4 = Wep4;

}

function SendWeapons(ShipAlive : boolean){

	if(ShipAlive)
	{
	gameObject.Find("Ship").SendMessageUpwards("AssignWeapon0", Weapon0, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("Ship").SendMessageUpwards("AssignWeapon1", Weapon1, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("Ship").SendMessageUpwards("AssignWeapon2", Weapon2, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("Ship").SendMessageUpwards("AssignWeapon3", Weapon3, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("Ship").SendMessageUpwards("AssignWeapon4", Weapon4, SendMessageOptions.DontRequireReceiver);
	}

}

function RetainWeapons(){
	
	gameObject.Find("WeaponsMenu").SendMessageUpwards("RetainWeapon0", Weapon0, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("WeaponsMenu").SendMessageUpwards("RetainWeapon1", Weapon1, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("WeaponsMenu").SendMessageUpwards("RetainWeapon2", Weapon2, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("WeaponsMenu").SendMessageUpwards("RetainWeapon3", Weapon3, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("WeaponsMenu").SendMessageUpwards("RetainWeapon4", Weapon4, SendMessageOptions.DontRequireReceiver);

}

function SendGUIWeapons(){

	gameObject.Find("InGameWeaponsGUIsHolder").SendMessageUpwards("GUIWeapon0", Weapon0, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("InGameWeaponsGUIsHolder").SendMessageUpwards("GUIWeapon1", Weapon1, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("InGameWeaponsGUIsHolder").SendMessageUpwards("GUIWeapon2", Weapon2, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("InGameWeaponsGUIsHolder").SendMessageUpwards("GUIWeapon3", Weapon3, SendMessageOptions.DontRequireReceiver);
	gameObject.Find("InGameWeaponsGUIsHolder").SendMessageUpwards("GUIWeapon4", Weapon4, SendMessageOptions.DontRequireReceiver);

}