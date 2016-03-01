var On : boolean = false;

function MoveUp(){

	On = true;

}

function MoveDown(){

	On = false;

}

function Update(){
	
	if(On)iTween.MoveTo(gameObject,{"y": 0.5, "x": 0.5, "time":0.5});
	else iTween.MoveTo(gameObject,{"y": 0.025, "time":0.5});


}