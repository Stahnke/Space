var speedvert : float = 0.5;
var speedhor : float = 1;

var LeftBound : boolean = false;
var RightBound : boolean = false;
var TopBound : boolean = false;
var BottomBound : boolean = false;

function Update() {

if(Time.timeScale > 0)
{

	if(Input.GetButton("Up") && TopBound == false)
	{
		transform.position += transform.forward *= speedvert;
	}
	
	if(Input.GetButton("Down") && BottomBound == false)
	{
		transform.position -= transform.forward *= speedvert;
	}
	
	if(Input.GetButton("Right") && RightBound == false)
	{
		transform.position += transform.right *= speedhor;
	}
	
	if(Input.GetButton("Left") && LeftBound == false)
	{
		transform.position -= transform.right *= speedhor;	
	}
}

}

function LeftBoundOn(){

	LeftBound = true;

}

function LeftBoundOff(){

	LeftBound = false;
}

function RightBoundOn(){

	RightBound = true;
}

function RightBoundOff(){

	RightBound = false;
}

function TopBoundOn(){

	TopBound = true;

}

function TopBoundOff(){

	TopBound = false;
}

function BottomBoundOn(){

	BottomBound = true;
}

function BottomBoundOff(){

	BottomBound = false;
}

function MovementOff(){

	BottomBound = true;
	TopBound = true;
	LeftBound = true;
	RightBound = true;
	
	iTween.MoveTo(gameObject,{"x": 0, "time": 4});
	iTween.MoveTo(gameObject,{"z": 5, "time": 4});
}

function MovementOn(){

	BottomBound = false;
	TopBound = false;
	LeftBound = false;
	RightBound = false;
}