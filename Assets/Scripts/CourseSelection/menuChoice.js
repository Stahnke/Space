
function OnSelected(On : boolean){

	if(On)iTween.MoveTo(gameObject,{"y": 0.6, "time": 0.5});
	
	else iTween.MoveTo(gameObject,{"y": 0.5, "time": 0.5});

}