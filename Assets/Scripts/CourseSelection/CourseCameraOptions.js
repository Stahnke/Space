var Location : int;
var NewPositionx : int;
var NewPositionz : int;

var MenuPosition : int;

var MenuRotation : int;
var MenuRotationStart : int;
var rotspeed : int;

function CheckCurrentCourse(CurrentCourse : int){

	if(CurrentCourse == 4 || CurrentCourse == 103) Location = 0;
	else if(CurrentCourse == 5 || CurrentCourse == 104) Location = 12;
	
	iTween.MoveTo(gameObject,{"x": Location, "time": 0.25});

}

function ZoomIn(On : boolean){

	if(On)
	{
		iTween.MoveTo(gameObject, new Vector3(NewPositionx,5,NewPositionz) ,0.50);
	}
	
	else 
	{
		iTween.MoveTo(gameObject, new Vector3(Location,12,0) ,0.50);
	}
}


function CheckPositionx(CoursePositionx : int){

	NewPositionx = CoursePositionx - 1;
}

function CheckPositionz(CoursePositionz : int){
	
	//Eventually do CoursePositionz - 2 so it will be in the left column and infoGUI will be on right of it
	NewPositionz = CoursePositionz;
}

function CheckMenu(CurrentMenu : int){
	
	if(CurrentMenu == 0)
	{
		MenuRotationStart = 90;
		MenuRotation = 70;
		rotspeed = -200;
		MenuPosition = 0;
	}
	
	else if(CurrentMenu == 1)
	{
		MenuRotationStart = 70;
		MenuRotation = 90;
		rotspeed = 200;
		MenuPosition = -20;
	}
	
	iTween.RotateTo(gameObject,{"x": MenuRotation, "time": 0.25});
	iTween.MoveTo(gameObject,{"z": MenuPosition, "time": 0.25});



	
	
}