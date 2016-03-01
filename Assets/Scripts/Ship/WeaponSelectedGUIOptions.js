var Slot : float;

function GetCurrentWeapon(CurrentWeapon : int){

	if(CurrentWeapon == 0) Slot = 0.04;
	else if(CurrentWeapon == 1) Slot = 0.08;
	else if(CurrentWeapon == 2) Slot = 0.12;
	else if(CurrentWeapon == 3) Slot = 0.16;
	else if(CurrentWeapon == 4) Slot = 0.20;

	iTween.MoveTo(gameObject,{"x": Slot, "time": 0.1});

}