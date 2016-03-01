var Target : Vector3;
var AliveTarget : float;
var MoveSpeed = 2.0;
var damping = 6.0;
var ShipAlive : boolean = true;
    
function Start(){



}

function Update (){

	//This AliveTarget will be an object that's x position will = 1 when the ship is alive, and 0 when it is dead

	AliveTarget = gameObject.Find("ShipAliveObject").transform.position.x;

	if(AliveTarget == 1)
	{
	
		Target = gameObject.Find("Ship").transform.position;
   
		var rotation = Quaternion.LookRotation(Target - transform.position);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
	}
	
}

