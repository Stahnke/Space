

function OnSelected(On : boolean){

	if(On)iTween.MoveTo(gameObject,{"y": 1, "time": 0.5});
	
	else iTween.MoveTo(gameObject,{"y": 0, "time": 0.5});

}