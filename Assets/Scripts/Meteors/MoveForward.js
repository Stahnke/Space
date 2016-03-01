var Speed : float;
var SpeedRangeMax : int = 4;

function Start(){

	Speed = Random.Range(1,SpeedRangeMax);
	Speed *= 0.5;

}

function Update(){
if(Time.timeScale > 0)
{
	transform.position += transform.forward *= Speed;
}
}