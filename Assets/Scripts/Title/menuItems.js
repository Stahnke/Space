var Type2 : boolean;
var Ship : GameObject;

var MoveSound : AudioClip;

function OnSelected(on : boolean){

	if(on)
	{
		GetComponent.<AudioSource>().PlayOneShot(MoveSound);
		iTween.MoveTo(gameObject,{"y": 15, "time":0.5});
		if(Type2)
		{
			iTween.MoveTo(Ship,{"z": 6, "time":0.5});
		}
	}
	
	else
	{
		iTween.MoveTo(gameObject,{"y": 0, "time":0.5});
		if(Type2)
		{
			iTween.MoveTo(Ship,{"z": 28, "time":0.5});
		}
	}
}