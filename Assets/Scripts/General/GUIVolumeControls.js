
var GUIVolume : float = 0.5;
var GUIVolumeInt : int;

function CheckVolume(NewVolume : float){

	GUIVolume = NewVolume;
	GUIVolume *= 100;
	GUIVolumeInt = Mathf.Round(GUIVolume);
	
	GetComponent.<GUIText>().text = "volume : " + GUIVolumeInt + " %";

}