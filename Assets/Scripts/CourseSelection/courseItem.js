var SendCamera: CourseCameraOptions;
var CourseImage : GameObject;
var GUIName: GameObject;
var GUIDiff : GameObject;
var GUIRAmt : GameObject;
var GUILAmt : GameObject;

var Name : int;
var Diff : int;
var LAmt : int;
var RAmt : int;

function OnSelected(on : boolean){

	if(on)
	{
		iTween.MoveTo(gameObject,{"y": 2, "time":0.5});
		SendCamera.CheckPositionx(gameObject.transform.position.x);
		SendCamera.CheckPositionz(gameObject.transform.position.z);
		
	}
	
	else
	{
		iTween.MoveTo(gameObject,{"y": 0, "time":0.5});
	}
}

function OnUnlocked(Unlocked : boolean){

	if(Unlocked)
	{
		CourseImage.active = true;
	}
	else CourseImage.active = false;
}

function LevelData(Course : int){

	if(Course == 0)
	{
		Name = 1;
		Diff = 1;
		RAmt = 5;
		LAmt = 5;
		
	}
	
	else if(Course == 1)
	{
		Name = 2;
		Diff = 1;
		RAmt = 5;
		LAmt = 5;
	}
	
	SetData();
	
	gameObject.Find("CUnlockManager").SendMessageUpwards("CheckRAmt", RAmt, SendMessageOptions.DontRequireReceiver);

}

function SetData(){

	GUIName.GetComponent.<GUIText>().text = "course " + Name;
	GUIDiff.GetComponent.<GUIText>().text = "difficulty: " + Diff;
	GUIRAmt.GetComponent.<GUIText>().text = "respawns: " + RAmt;
	GUILAmt.GetComponent.<GUIText>().text = "levels: " + LAmt;

}