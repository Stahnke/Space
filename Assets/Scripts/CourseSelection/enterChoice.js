var ArrowGUI : GameObject;

function OnSelected (On : boolean){

	if(On)
	{
		ArrowGUI.active = true;
	}
	else ArrowGUI.active = false;
}
