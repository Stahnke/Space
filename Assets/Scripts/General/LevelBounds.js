var Left : boolean = false;
var Right : boolean = false;
var Top : boolean = false;
var Bottom : boolean = false;

function OnTriggerEnter(ship : Collider){

	if(ship.tag == "Ship")
	{
		if(Left)
		{
			gameObject.Find("Ship").SendMessageUpwards("LeftBoundOn", 0, SendMessageOptions.DontRequireReceiver);
		}
		else if(Right)
		{
			gameObject.Find("Ship").SendMessageUpwards("RightBoundOn", 0, SendMessageOptions.DontRequireReceiver);
		}
		else if(Top)
		{
			gameObject.Find("Ship").SendMessageUpwards("TopBoundOn", 0, SendMessageOptions.DontRequireReceiver);
		}
		else if(Bottom)
		{
			gameObject.Find("Ship").SendMessageUpwards("BottomBoundOn", 0, SendMessageOptions.DontRequireReceiver);
		}
	}

}

function OnTriggerExit(ship : Collider){

	if(ship.tag == "Ship")
	{
		if(Left)
		{
			gameObject.Find("Ship").SendMessageUpwards("LeftBoundOff", 0, SendMessageOptions.DontRequireReceiver);
		}
		else if(Right)
		{
			gameObject.Find("Ship").SendMessageUpwards("RightBoundOff", 0, SendMessageOptions.DontRequireReceiver);
		}
		else if(Top)
		{	
			gameObject.Find("Ship").SendMessageUpwards("TopBoundOff", 0, SendMessageOptions.DontRequireReceiver);
		}
		else if(Bottom)
		{
			gameObject.Find("Ship").SendMessageUpwards("BottomBoundOff", 0, SendMessageOptions.DontRequireReceiver);
		}
	}

}