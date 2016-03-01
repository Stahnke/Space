var WeaponItems : weaponItem[];

var CurrentWeapon : int;
var LastWeapon : int;

var Okay : boolean = true;
var ChangeOkay : boolean = true;

var keyDelay : float = 0.05;

function Start () {

	//Find CUnlockManager to send the Item slots to this script, we might be able to send it directly to SecondaryShooting instead,
	// but for now we might have to send it here for CurrentWeapon conditions
	
	while(Okay){
	
		if(ChangeOkay)
		{
	
			LastWeapon = CurrentWeapon;
		
			if(Input.GetButtonDown("SwitchRight"))
			{
				if(CurrentWeapon < 4) CurrentWeapon++;
				else if(CurrentWeapon == 4) CurrentWeapon = 0;
				gameObject.Find("GUIWeaponSelected").SendMessageUpwards("GetCurrentWeapon",CurrentWeapon, SendMessageOptions.DontRequireReceiver);
				gameObject.Find("Ship").SendMessageUpwards("CheckCurrentWeapon",CurrentWeapon, SendMessageOptions.DontRequireReceiver);
				
				yield new WaitForSeconds(keyDelay);
			}
			

		
			else if(Input.GetButtonDown("SwitchLeft"))
			{
				if(CurrentWeapon > 0) CurrentWeapon--;
				else if (CurrentWeapon == 0) CurrentWeapon = 4;
				gameObject.Find("GUIWeaponSelected").SendMessageUpwards("GetCurrentWeapon",CurrentWeapon, SendMessageOptions.DontRequireReceiver);
				gameObject.Find("Ship").SendMessageUpwards("CheckCurrentWeapon",CurrentWeapon, SendMessageOptions.DontRequireReceiver);
				
				yield new WaitForSeconds(keyDelay);
			}
			
			yield;
		}
	}

}

function ChangeOkayOn(){
	
	ChangeOkay = true;

}

function ChangeOkayOff(){

	ChangeOkay = false;
}