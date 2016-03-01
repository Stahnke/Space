//This script is for Selecting which 5 weapons will be used during the course
//Give each useable weapon a number tag 0-29*, then access these tags and attach them to Weapons0-4,
// *subject to change

var WeaponChoices : weaponChoice[];
var WeaponSlots : weaponSlot[];
// ^^^^these are the same because they both will light up as blue squares
var CurrentChoice : int;
var LastChoice : int;
var CurrentSlot : int;
var LastSlot : int;
var keyDelay : float = 0.1;
var DownCap : int = 25;
var RightCap : int = 29;

var Weapon0 : int;
var Weapon1 : int;
var Weapon2 : int;
var Weapon3 : int;
var Weapon4 : int;

var W2Unlocked : boolean;
var W3Unlocked : boolean;
var W4Unlocked : boolean;

var SlotOkay : boolean = false;
var SelectOkay : boolean = false;

var SendWeaponInfo : WeaponInfoGUIs;


// for now just 30 items, 0-29
// this means 6 rows by 5 columns

function Start(){

	gameObject.Find("CUnlockManager").SendMessageUpwards("RetainWeapons", SendMessageOptions.DontRequireReceiver);
	gameObject.Find("CUnlockManager").SendMessageUpwards("SendWeaponUnlocks", SendMessageOptions.DontRequireReceiver);

}

function SelectSlot(){
	
	SelectOkay = false;
	
	SlotOkay = true;
	
	CheckSlotWeapon();
	
	SendWeaponInfo.InfoGUIs(true);
	
	WeaponSlots[CurrentSlot].OnSelected(true);
	
	SendWeaponInfo.GetSlotNum(CurrentSlot);
	
	while(SlotOkay)
	{
		LastSlot = CurrentSlot;
		
		if(Input.GetButtonDown("Right"))
		{
			if(CurrentSlot < 4) CurrentSlot++;
			else if(CurrentSlot == 4) CurrentSlot = 0;
			
			if(LastSlot != CurrentSlot)
			{
				WeaponSlots[CurrentSlot].OnSelected(true);
				WeaponSlots[LastSlot].OnSelected(false);
			}
			
			SendWeaponInfo.GetSlotNum(CurrentSlot);
			CheckSlotWeapon();
			yield WaitForSeconds(keyDelay);
			
		}
		
		else if(Input.GetButtonDown("Left"))
		{
			if(CurrentSlot > 0) CurrentSlot--;
			else if (CurrentSlot == 0) CurrentSlot = 4;
			
			if(LastSlot != CurrentSlot)
			{
				WeaponSlots[CurrentSlot].OnSelected(true);
				WeaponSlots[LastSlot].OnSelected(false);
			}
			
			SendWeaponInfo.GetSlotNum(CurrentSlot);
			CheckSlotWeapon();
			yield WaitForSeconds(keyDelay);
		}
		
		yield;
		
		if(Input.GetButtonDown("Shoot"))
		{
			SelectWeapon();
		}
		
		else if(Input.GetButtonDown("SecondaryShoot"))
		{
			CancelSlot();
		}
		
	}

}

function SelectWeapon(){
	
	SlotOkay = false;
	
	SelectOkay = true;

	SendWeaponInfo.GetInfoChoice(CurrentChoice);
	
	WeaponChoices[CurrentChoice].OnSelected(true);
	
	while(SelectOkay)
	{
		LastChoice = CurrentChoice;
		
		if(Input.GetButtonDown("Right"))
		{
			if(CurrentChoice < RightCap) CurrentChoice++;
			
			if(LastChoice != CurrentChoice)
			{
				WeaponChoices[CurrentChoice].OnSelected(true);
				WeaponChoices[LastChoice].OnSelected(false);
			}
			
			SendWeaponInfo.GetInfoChoice(CurrentChoice);
			yield WaitForSeconds(keyDelay);
		}
		
		else if(Input.GetButtonDown("Left"))
		{
			if(CurrentChoice > 0) CurrentChoice--;
			
			if(LastChoice != CurrentChoice)
			{
				WeaponChoices[CurrentChoice].OnSelected(true);
				WeaponChoices[LastChoice].OnSelected(false);
			}
			
			SendWeaponInfo.GetInfoChoice(CurrentChoice);
			yield WaitForSeconds(keyDelay);
		}
		
		else if(Input.GetButtonDown("Up"))
		{
			if(CurrentChoice > 4)CurrentChoice -= 5;
			
			if(LastChoice != CurrentChoice)
			{
				WeaponChoices[CurrentChoice].OnSelected(true);
				WeaponChoices[LastChoice].OnSelected(false);
			}
			
			SendWeaponInfo.GetInfoChoice(CurrentChoice);
			yield WaitForSeconds(keyDelay);
		}
		
		else if(Input.GetButtonDown("Down"))
		{
			if(CurrentChoice < DownCap) CurrentChoice += 5;
			
			if(LastChoice != CurrentChoice)
			{
				WeaponChoices[CurrentChoice].OnSelected(true);
				WeaponChoices[LastChoice].OnSelected(false);
			}
			
			SendWeaponInfo.GetInfoChoice(CurrentChoice);
			yield WaitForSeconds(keyDelay);
		}
		
		yield;
		
		if(Input.GetButtonDown("Shoot"))
		{
			CheckUnlock();
			yield WaitForSeconds(keyDelay);
		}
		
		else if(Input.GetButtonDown("SecondaryShoot"))
		{
			CancelSelect();
			yield WaitForSeconds(keyDelay);
		}
		
	}

}

function CancelSelect(){

	SelectOkay = false;
	WeaponChoices[CurrentChoice].OnSelected(false);
	SelectSlot();
	//Turn off blue highlight
}

function CancelSlot(){

	SlotOkay = false;
	SendWeaponInfo.FrameGUIs(false);
	SendWeaponInfo.InfoGUIs(false);
	CheckSlotWeapon();
	gameObject.Find("Menu").SendMessageUpwards("SelectOption", SendMessageOptions.DontRequireReceiver);
	//Exit Selection Menu
}

function RetainWeapon0(Wep0 : int){

	Weapon0 = Wep0;
}

function RetainWeapon1(Wep1 : int){

	Weapon1 = Wep1;
}

function RetainWeapon2(Wep2 : int){

	Weapon2 = Wep2;
}

function RetainWeapon3(Wep3 : int){

	Weapon3 = Wep3;
}

function RetainWeapon4(Wep4 : int){

	Weapon4 = Wep4;
}

function CheckSlotWeapon(){

	if(CurrentSlot == 0)
	{
		SendWeaponInfo.GetInfoChoice(Weapon0);
	}
	else if(CurrentSlot == 1)
	{
		SendWeaponInfo.GetInfoChoice(Weapon1);
	}
	else if(CurrentSlot == 2)
	{
		SendWeaponInfo.GetInfoChoice(Weapon2);
	}
	else if(CurrentSlot == 3)
	{
		SendWeaponInfo.GetInfoChoice(Weapon3);
	}
	else if(CurrentSlot == 4)
	{
		SendWeaponInfo.GetInfoChoice(Weapon4);
	}
	
}

function GetUnlocks(Num : int){

	// eventually make it so the unlocks turn on the GUI for the weapon through: CourseItems[Num].OnUnlocked(true);

	if(Num == 2)
	{
		W2Unlocked = true;
	}
	if(Num == 3)
	{
		W3Unlocked = true;
	}
	if(Num == 4)
	{
		W4Unlocked = true;
	}
}

function CheckUnlock(){

//CheckUnlock before assign

	if(CurrentChoice == 0) CheckSlot();

	else if(CurrentChoice == 1) CheckSlot();

	else if(CurrentChoice == 2 && W2Unlocked == true)
	{
		CheckSlot();
	}
	else if(CurrentChoice == 3 && W3Unlocked == true)
	{
		CheckSlot();
	}
	else if(CurrentChoice == 4 && W4Unlocked == true)
	{
		CheckSlot();
	}
	
	else
	{
		//Make error noise and say " Not Unlocked "
	}
}

function CheckSlot(){
	
	if(CurrentSlot == 0)
	{
		Weapon0 = CurrentChoice;
		gameObject.Find("CUnlockManager").SendMessageUpwards("GetWeapon0", Weapon0, SendMessageOptions.DontRequireReceiver);
		CancelSelect();
	}
	else if(CurrentSlot == 1)
	{
		Weapon1 = CurrentChoice;
		gameObject.Find("CUnlockManager").SendMessageUpwards("GetWeapon1", Weapon1, SendMessageOptions.DontRequireReceiver);
		CancelSelect();
	}
	else if(CurrentSlot == 2)
	{
		Weapon2 = CurrentChoice;
		gameObject.Find("CUnlockManager").SendMessageUpwards("GetWeapon2", Weapon2, SendMessageOptions.DontRequireReceiver);
		CancelSelect();
	}
	else if(CurrentSlot == 3)
	{
		Weapon3 = CurrentChoice;
		gameObject.Find("CUnlockManager").SendMessageUpwards("GetWeapon3", Weapon3, SendMessageOptions.DontRequireReceiver);
		CancelSelect();
	}
	else if(CurrentSlot == 4)
	{
		Weapon4 = CurrentChoice;
		gameObject.Find("CUnlockManager").SendMessageUpwards("GetWeapon4", Weapon4, SendMessageOptions.DontRequireReceiver);
		CancelSelect();
	}	

}