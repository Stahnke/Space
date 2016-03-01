var MovementOkay : boolean = true;

function Start(){

	iTween.MoveAdd(gameObject,{"x": 10, "time": 1});
	yield WaitForSeconds(1);
	
	while(MovementOkay)
	{
		iTween.MoveBy(gameObject,{"x": -20, "time": 1});
		yield WaitForSeconds(1);
		iTween.MoveBy(gameObject,{"x": 20, "time": 1});
		yield WaitForSeconds(1);
	}

}