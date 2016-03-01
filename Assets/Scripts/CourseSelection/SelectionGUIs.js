var SelectCourseGUI : GameObject;

var YesGUI : GameObject;
var NoGUI: GameObject;
var QuestionGUI : GameObject;
var YesArrowGUI: GameObject;
var NoArrowGUI : GameObject;
var NameGUI : GameObject;
var DiffGUI : GameObject;
var LAmtGUI : GameObject;
var RAmtGUI : GameObject;

var CourseMenuGUI : GameObject;
var WeaponMenuGUI : GameObject;

function SelectionGUIsOn(On : boolean){

	if(On)
	{
		SelectCourseGUI.active = false;
		
		YesGUI.active = true;
		NoGUI.active = true;
		QuestionGUI.active = true;
		YesArrowGUI.active = true;
		NameGUI.active = true;
		DiffGUI.active = true;
		LAmtGUI.active = true;
		RAmtGUI.active = true;
		
	}
	
	else
	{
	
		SelectCourseGUI.active = true;
		
		YesGUI.active = false;
		NoGUI.active = false;
		QuestionGUI.active = false;
		YesArrowGUI.active = false;
		NoArrowGUI.active = false;
		NameGUI.active = false;
		DiffGUI.active = false;
		LAmtGUI.active = false;
		RAmtGUI.active = false;
	}
}

function FrameGUIs(FrameOn : boolean){

	if(FrameOn)
	{
		SelectCourseGUI.active = true;
	}
	else SelectCourseGUI.active = false;

}

function MenuGUIsOn(MenuOn : boolean){

	if(MenuOn)
	{
		CourseMenuGUI.active = true;
		WeaponMenuGUI.active = true;
	}
	
	else
	{
		CourseMenuGUI.active = false;
		WeaponMenuGUI.active = false;
	}

}