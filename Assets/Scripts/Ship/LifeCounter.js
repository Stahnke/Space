var Lives : int = 5;
var Ship : GameObject;
var SpawnPoint : Transform;
var WaitTime : int = 1;

var GUILives : GameObject;
var GameOverGUI : GameObject;

function Update(){

	GUILives.GetComponent.<GUIText>().text = "lives: " + Lives;
}

function Start(){
	
	gameObject.Find("CUnlockManager").SendMessageUpwards("SendLivesAmount", SendMessageOptions.DontRequireReceiver);
}

function GetLivesAmount(MaxLives : int){

	Lives = MaxLives;
}

function Respawn(){

	if(Lives > 1)
	{
		yield WaitForSeconds(WaitTime);
		var go = Spawner.Spawn(Ship, SpawnPoint.position, SpawnPoint.rotation) as GameObject;
		LoseLife();
	}
	
	else if(Lives == 1)
	{
		LoseLife();
		GameOver();
	}
}

function LoseLife(){

	Lives -= 1;
}

function GameOver(){

	//Implement this eventually, but for now use this:
	var go1 = Spawner.Spawn(GameOverGUI, GameOverGUI.transform.position, GameOverGUI.transform.rotation) as GameObject;
	GameObject.Find("MusicPlayerAll").SendMessageUpwards("ChangeSong", 6, SendMessageOptions.DontRequireReceiver);
	yield WaitForSeconds(6.75);
	gameObject.Find("FadeController").SendMessageUpwards("fadeOut", SendMessageOptions.DontRequireReceiver);
	yield WaitForSeconds(0.5);
	GameObject.Find("MusicPlayerAll").SendMessageUpwards("ChangeSong", 1, SendMessageOptions.DontRequireReceiver);
	Application.LoadLevel("CourseSelection");
}
