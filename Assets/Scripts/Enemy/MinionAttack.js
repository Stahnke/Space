
function MinionCircleAttack(){

		iTween.MoveAdd(gameObject,{"z": 30, "time": 5});
		yield WaitForSeconds(6);
		iTween.MoveAdd(gameObject,{"z": -30, "time": 5});
}


// HEY START MAKING THE INNER SHOOT POINTS SO IT'S LIKE A FIELD OF LAZER BEAMS!!!!