var speed : float;

function Update () {
if(Time.timeScale > 0)
{
	transform.position += transform.forward *= speed;
}
}