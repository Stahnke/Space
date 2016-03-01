var SlotNumGUI : GameObject;
var NameGUI : GameObject;
var DmgGUI : GameObject;
var FPSGUI : GameObject;
var EPSGUI : GameObject;
var SpecGUI : GameObject;

var SlotNum : int;
var Name : String;
var dmg : int;
var FPS : int;
var EPS : int;
var Spec : String;

var AssignWeaponsGUI : GameObject;

function InfoGUIs(On : boolean){

	if(On)
	{
		SlotNumGUI.active = true;
		NameGUI.active = true;
		DmgGUI.active = true;
		FPSGUI.active = true;
		EPSGUI.active = true;
		SpecGUI.active = true;
		
	}
	
	else
	{
		SlotNumGUI.active = false;
		NameGUI.active = false;
		DmgGUI.active = false;
		FPSGUI.active = false;
		EPSGUI.active = false;
		SpecGUI.active = false;
	}
}

function FrameGUIs(FrameOn : boolean){

	if(FrameOn)
	{
		AssignWeaponsGUI.active = true;
	}
	
	else
	{
		AssignWeaponsGUI.active = false;
	}

}

function GetInfoChoice(CurrentWeapon : int){
	
	if(CurrentWeapon == 0)
	{
		Name = "empty";
		dmg = 0;
		FPS = 0;
		EPS = 0;
		Special = " ";
	}
	
	else if(CurrentWeapon == 1)
	{
		Name = "fire ball";
		dmg = 20;
		FPS = 5;
		EPS = 10;
		Special = "burns the enemy for 5 dps";
	}
	
	else
	{
		Name = "???";
		dmg = 0;
		FPS = 0;
		EPS = 0;
		Special = " ";
	}
	
	NameGUI.GetComponent.<GUIText>().text = Name;
	DmgGUI.GetComponent.<GUIText>().text = "damage: " + dmg;
	FPSGUI.GetComponent.<GUIText>().text = "fps: " + FPS;
	EPSGUI.GetComponent.<GUIText>().text = "eps: " + EPS;
	SpecGUI.GetComponent.<GUIText>().text = Special;

}

function GetSlotNum(Slot : int){

	SlotNum = Slot + 1;
	
	SlotNumGUI.GetComponent.<GUIText>().text = "slot: " + SlotNum;

}
