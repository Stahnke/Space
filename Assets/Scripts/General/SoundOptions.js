
var HSliderValue : float = 0.5;

var SendGUIVolume : GUIVolumeControls;

function OnGUI(){

HSliderValue = GUI.HorizontalSlider( Rect(25, 25, 100, 30), HSliderValue, 0.0, 1.0);
GetComponent.<AudioSource>().volume = HSliderValue;
SendGUIVolume.CheckVolume(HSliderValue);
}