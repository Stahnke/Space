var Score : int = 0;

var GUIScore : GameObject;

function Update () {

	GUIScore.GetComponent.<GUIText>().text = "score: " + Score;
}

function AddScore(Points : int){

	//Use a boolean and a *(someint) to do multiplier powerup drops (:
	Score += Points;

}