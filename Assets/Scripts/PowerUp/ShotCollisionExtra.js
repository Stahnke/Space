var Normal : boolean = true;

function OnTriggerEnter(shot : Collider){

	if(shot.tag == "EnemyNormalShot")
	{
		Destroy(shot);
		if(Normal)
		{
			Destroy(gameObject);
		}
	}

}