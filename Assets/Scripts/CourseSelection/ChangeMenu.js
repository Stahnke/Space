var MenuChoices : menuChoice[];
var CurrentMenu : int;
var LastMenu : int;
var keyDelay : float = 0.1;

var Okay : boolean = true;

var SendCamera : CourseCameraOptions;
var SendGUIs : SelectionGUIs;
var SendWGUIs : WeaponInfoGUIs;

// For now there are only 2 menus, weapon select and course select, but more will be added

function SelectOption(){

	SendGUIs.MenuGUIsOn(true);
	SendGUIs.FrameGUIs(false);
	SendWGUIs.FrameGUIs(false);
	
	MenuChoices[CurrentMenu].OnSelected(true);
	
	Okay = true;
	
	while(Okay)
	{
		LastMenu = CurrentMenu;
		
		if(Input.GetButtonDown("Right"))
		{
			if(CurrentMenu < 1)CurrentMenu++;
			else if (CurrentMenu == 1) CurrentMenu = 0;
			
			if(LastMenu != CurrentMenu)
			{
				MenuChoices[CurrentMenu].OnSelected(true);
				MenuChoices[LastMenu].OnSelected(false);
			}
			
			MoveCamera();
			
			yield WaitForSeconds(keyDelay);
		}
		
		else if(Input.GetButtonDown("Left"))
		{
			if(CurrentMenu > 0) CurrentMenu--;
			else if (CurrentMenu == 0) CurrentMenu = 1;
			
			if(LastMenu != CurrentMenu)
			{
				MenuChoices[CurrentMenu].OnSelected(true);
				MenuChoices[LastMenu].OnSelected(false);
			}
			
			MoveCamera();
			
			yield WaitForSeconds(keyDelay);
		}
		
		else if(Input.GetButtonDown("Shoot"))
		{
			if(CurrentMenu == 0)
			{
				SendGUIs.FrameGUIs(true);
				gameObject.Find("MenuManager").SendMessageUpwards("SelectCourse", SendMessageOptions.DontRequireReceiver);
			}
			
			else if (CurrentMenu == 1)
			{
				SendWGUIs.FrameGUIs(true);
				gameObject.Find("WeaponsMenu").SendMessageUpwards("SelectSlot", SendMessageOptions.DontRequireReceiver);
			}
			
			Exit();
			yield WaitForSeconds(keyDelay);
		}
		
		yield;
	}

}

function Exit(){

	Okay = false;
	// Kill GUIs
	SendGUIs.MenuGUIsOn(false);
}

function MoveCamera(){

	SendCamera.CheckMenu(CurrentMenu);
}