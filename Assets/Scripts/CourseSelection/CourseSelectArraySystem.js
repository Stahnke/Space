var CourseItems : courseItem[];
var EnterChoices : enterChoice[];
var CurrentCourse : int = 0;
var CurrentChoice : int = 0;
var LastChoice : int;

var keyDelay : float = 0.10;

var UpAble : boolean = false;
var DownAble : boolean = false;
var RightAble : boolean = false;
var LeftAble : boolean = false;

var C1Unlocked : boolean = false;
var C2Unlocked : boolean = false;
var C3Unlocked : boolean = false;
var C4Unlocked : boolean = false;
var C5Unlocked : boolean = false;
var C102Unlocked : boolean = false;

var SelectionOkay : boolean = true;
var Selecting : boolean = true;

var EnterSound : AudioClip;
var FullEnterSound : AudioClip;
var SelectCourseSound : AudioClip;
var ChoiceSound : AudioClip;
var CancelSound : AudioClip;

var SongNumber : int;

var SendCamera : CourseCameraOptions;

var SendSelectionGUIs: SelectionGUIs;

function Update(){
	
	if(Selecting == true)
	{
	
//===Starting cube===================================
		if(CurrentCourse == 0)
		{
			DownAble = false;
			RightAble = false;
			LeftAble = false;
			if(C1Unlocked) UpAble = true;
			else UpAble = false;
		}
		
//===Middle Verticals================================
		else if(CurrentCourse == 1)
		{
			DownAble = true;
			RightAble = false;
			LeftAble = false;
			if(C2Unlocked) UpAble = true;
			else UpAble = false;
		}
		
		else if(CurrentCourse == 4)
		{
			UpAble = true;
			DownAble = true;
			RightAble = false;
			LeftAble = false;			
		}
		
		else if(CurrentCourse == 103)
		{
			UpAble = true;
			DownAble = true;
			RightAble = false;
			LeftAble = false;			
		}
		
		else if(CurrentCourse == 104)
		{
			UpAble = true;
			DownAble = true;
			RightAble = false;
			LeftAble = false;			
		}
	
//===TopMiddles======================================
		else if(CurrentCourse == 2)
		{
			UpAble = false;
			DownAble = true;
			if(C3Unlocked) LeftAble = true;
			else if(!C3Unlocked) LeftAble = false;
			if(C102Unlocked) RightAble = true;
			else if (!C102Unlocked) RightAble = false;
		}
		
//===BottomLeft Corners==============================
		else if(CurrentCourse == 3)
		{
			UpAble = true;
			LeftAble = false;
			DownAble = false;
			RightAble = true;
		}
		
//===BottomRight Corners=============================
		else if(CurrentCourse == 102)
		{
			UpAble = true;
			LeftAble = true;
			DownAble = false;
			RightAble = false;
		}
	
//===Ending Cube=====================================
	}
}

function Start(){

	gameObject.Find("CUnlockManager").SendMessageUpwards("SendCurrentCourse", SendMessageOptions.DontRequireReceiver);

	gameObject.Find("CUnlockManager").SendMessageUpwards("SendUnlocks", SendMessageOptions.DontRequireReceiver);
	
	CourseItems[CurrentCourse].LevelData(CurrentCourse);

	CourseItems[CurrentCourse].OnSelected(true);
	
	Exit();
}
	
function SelectCourse(){

	var LastCourse : int = CurrentCourse;
	
	SelectionOkay = true;
	
	while(SelectionOkay)
	{
		
		LastCourse = CurrentCourse;
		
		if(Input.GetButtonDown("Up") && UpAble == true)
		{
			GetComponent.<AudioSource>().PlayOneShot(SelectCourseSound);
			
			CurrentCourse++;
			if(CurrentCourse >= CourseItems.length) CurrentCourse = CourseItems.length - 1;
			
			if(LastCourse != CurrentCourse)
			{
				CourseItems[CurrentCourse].LevelData(CurrentCourse);
				
				CourseItems[LastCourse].OnSelected(false);
			
				CourseItems[CurrentCourse].OnSelected(true);
			}
			
			Zoom();
			
			yield new WaitForSeconds(keyDelay);
		}
		
		else if(Input.GetButtonDown("Down") && DownAble == true)
		{
			GetComponent.<AudioSource>().PlayOneShot(SelectCourseSound);
			
			CurrentCourse--;
			if(CurrentCourse < 0) CurrentCourse = 0;
			
			if(LastCourse != CurrentCourse)
			{
				CourseItems[CurrentCourse].LevelData(CurrentCourse);
				
				CourseItems[LastCourse].OnSelected(false);
			
				CourseItems[CurrentCourse].OnSelected(true);
			}
			
			Zoom();
			
			yield new WaitForSeconds(keyDelay);
			
		}
		
		else if(Input.GetButtonDown("Right") && RightAble == true)
		{
			GetComponent.<AudioSource>().PlayOneShot(SelectCourseSound);
			
			if(CurrentCourse == 3) CurrentCourse--;
			
			else CurrentCourse += 100;
			
			if(LastCourse != CurrentCourse)
			{
				CourseItems[CurrentCourse].LevelData(CurrentCourse);
				
				CourseItems[LastCourse].OnSelected(false);
			
				CourseItems[CurrentCourse].OnSelected(true);
			}
			
			Zoom();
			
			yield new WaitForSeconds(keyDelay);
		}
		
		else if(Input.GetButtonDown("Left") && LeftAble == true) 
		{
			GetComponent.<AudioSource>().PlayOneShot(SelectCourseSound);
			
			if(CurrentCourse == 102) CurrentCourse -= 100;
			
			else CurrentCourse ++;
			
			if(LastCourse != CurrentCourse)
			{
				CourseItems[CurrentCourse].LevelData(CurrentCourse);
				
				CourseItems[LastCourse].OnSelected(false);
			
				CourseItems[CurrentCourse].OnSelected(true);
			}
			
			Zoom();
			
			yield new WaitForSeconds(keyDelay);
		}
		
		yield;
		
		if(Input.GetButtonDown("Shoot"))
		{
			SendCamera.ZoomIn(true);
			if(Selecting) CheckCourse();
		}
		
		if(Input.GetButtonDown("SecondaryShoot"))
		{
			if(Selecting)
			{
				Exit();
			}
			
			else if(!Selecting) 
			{
				GetComponent.<AudioSource>().PlayOneShot(CancelSound);
				CancelSelection();
			}
			yield new WaitForSeconds(keyDelay);
			
		}

	}
}

function Zoom(){

	SendCamera.CheckCurrentCourse(CurrentCourse);
}

function ChangeSong(){

	gameObject.Find("MusicPlayerAll").SendMessageUpwards("ChangeSong", SongNumber, SendMessageOptions.DontRequireReceiver);

}

function Exit(){

	SelectionOkay = false;
	gameObject.Find("Menu").SendMessageUpwards("SelectOption", SendMessageOptions.DontRequireReceiver);
}

function CancelSelection(){

	Selecting = true;
	SendSelectionGUIs.SelectionGUIsOn(false);
	SendCamera.ZoomIn(false);
	CurrentChoice = 0;
	yield WaitForSeconds(0.50);
}

function RetainCourse(RetainedCourse : int){

	CurrentCourse = RetainedCourse;
}

function CheckCourse(){
	
	GetComponent.<AudioSource>().PlayOneShot(EnterSound);
	
	Selecting = false;
	SendSelectionGUIs.SelectionGUIsOn(true);
	UpAble = false;
	LeftAble = false;
	DownAble  = false;
	RightAble = false;
	yield new WaitForSeconds(0.50);
	
	while(!Selecting)
	{
		LastChoice = CurrentChoice;
		
		if(Input.GetButtonDown("Left"))
		{
			GetComponent.<AudioSource>().PlayOneShot(ChoiceSound);
			
			if(CurrentChoice == 0) CurrentChoice = 1;
			else if(CurrentChoice == 1) CurrentChoice = 0;
			
			if(LastChoice != CurrentChoice)
			{
				EnterChoices[LastChoice].OnSelected(false);
			
				EnterChoices[CurrentChoice].OnSelected(true);
			}
			
		}
		
		else if(Input.GetButtonDown("Right"))
		{
			GetComponent.<AudioSource>().PlayOneShot(ChoiceSound);
			
			if(CurrentChoice == 1) CurrentChoice = 0;
			else if (CurrentChoice == 0) CurrentChoice = 1;
			
			if(LastChoice != CurrentChoice)
			{
				EnterChoices[LastChoice].OnSelected(false);
			
				EnterChoices[CurrentChoice].OnSelected(true);
			}
		}
		
		yield;
		
		if(Input.GetButtonDown("Shoot"))
		{
			if(CurrentChoice == 0)
			{
				GetComponent.<AudioSource>().PlayOneShot(FullEnterSound);
				gameObject.Find("FadeController").SendMessageUpwards("fadeOut", SendMessageOptions.DontRequireReceiver);
				yield WaitForSeconds(0.5);
			
				if(CurrentCourse == 0)
				{
					gameObject.Find("CUnlockManager").SendMessageUpwards("GetCurrentCourse", CurrentCourse, SendMessageOptions.DontRequireReceiver);
					SongNumber = 2;
					yield WaitForSeconds(.1);
					ChangeSong();
					Application.LoadLevel("Main");
				}
				
				if(CurrentCourse == 1)
				{
					gameObject.Find("CUnlockManager").SendMessageUpwards("GetCurrentCourse", CurrentCourse, SendMessageOptions.DontRequireReceiver);
					SongNumber = 2;
					yield WaitForSeconds(.1);
					ChangeSong();
					Application.LoadLevel("Main");
				}
			}
			else 
			{
				GetComponent.<AudioSource>().PlayOneShot(CancelSound);
				CancelSelection();
			}
		}
	}
}

function GetCUnlock(Num : int){

	CourseItems[Num].OnUnlocked(true);

	if(Num == 1)
	{
		C1Unlocked = true;
	}
	if(Num == 2)
	{
		C2Unlocked = true;
	}
	if(Num == 3)
	{
		C3Unlocked = true;
	}
	if(Num == 4)
	{
		C4Unlocked = true;
	}
	if(Num == 5)
	{
		C5Unlocked = true;
	}
	if(Num == 102)
	{
		C102Unlocked = true;
	}
	if(Num == 103)
	{
		C103Unlocked = true;
	}
}