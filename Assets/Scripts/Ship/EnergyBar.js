var EnergyDisplay : float = 0;
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;
var pos : Vector2 = new Vector2(20,100);
var size : Vector2 = new Vector2(60,20);

var progress_empty : GUIStyle;
var progress_full : GUIStyle;

function OnGUI(){
     
     //draw the background:
    GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
    	GUI.Box (Rect (0, 0, size.x, size.y),progressBarEmpty,progress_empty);
 
     //draw the filled-in part:
   		GUI.BeginGroup (new Rect (0, 0, size.x * EnergyDisplay, size.y));
    		GUI.Box (Rect (0,0, size.x, size.y),progressBarFull,progress_full);
	    GUI.EndGroup ();
    GUI.EndGroup ();

}

function CheckEnergy(Energy : int){
	
	EnergyDisplay = Energy * 0.01;
}