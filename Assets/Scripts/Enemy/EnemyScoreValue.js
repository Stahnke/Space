var Points : int = 100;

function SendScore(){

	gameObject.Find("ScoreSystem").SendMessageUpwards("AddScore", Points, SendMessageOptions.DontRequireReceiver);

}