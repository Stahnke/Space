var Pause : boolean = false;
var SongNumber : int = 0;

function Update () {

	if(Input.GetButtonDown("Pause")){
		
		Pause = true;
		Time.timeScale = 0;
	}
}

function OnGUI(){

	if(Pause == true)
	{
		if(GUI.Button(Rect(430,200,100,40),"Resume"))
		{	
			Pause = false;
			Time.timeScale = 1;	
		}
		
		if(GUI.Button(Rect(430,400,100,40),"Quit"))
		{
			SongNumber = 1;
			ChangeSong();
			gameObject.Find("FadeController").SendMessageUpwards("fadeOut", SendMessageOptions.DontRequireReceiver);
			Application.LoadLevel("CourseSelection");
		}
	}
}

function ChangeSong(){

	gameObject.Find("MusicPlayerAll").SendMessageUpwards("ChangeSong", SongNumber, SendMessageOptions.DontRequireReceiver);

}