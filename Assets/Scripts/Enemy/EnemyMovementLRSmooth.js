var MovementRate : float = 0.1;
var Counter : float = 5;

var MoveLeftOkay : boolean = true;

function Start(){
	
	Counter = 10;
	MoveLeftOkay = true;
	MoveLeft();
}

function Update(){

	if(Counter >= 20)
	{
		MoveLeftOkay = false;
		MoveRight();
	}
	if(Counter <= 0)
	{
		MoveLeftOkay = true;
		MoveLeft();
	
	}
}

function MoveLeft(){

	while(MoveLeftOkay)
	{
		gameObject.transform.position.x += MovementRate;
		Counter += MovementRate;
		yield WaitForSeconds(0.01);
	}
}

function MoveRight(){

	while(!MoveLeftOkay)
	{
		gameObject.transform.position.x -= MovementRate;
		Counter -= MovementRate;
		yield WaitForSeconds(0.01);
	}
}
