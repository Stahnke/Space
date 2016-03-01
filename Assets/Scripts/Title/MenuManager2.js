var MenuItems:menuItems[];

var currentMenuItem : int = 0;

var keyDelay : float = 0.25;

var SelectSound : AudioClip;

var SendMusicPlayer : SongSwitch;

function Start(){
	
	MenuItems[currentMenuItem].OnSelected(true);
	
	var lastMenuItem : int = currentMenuItem;
	
	while(true)
	{
		if(Input.GetAxisRaw("Vertical") > 0.9)
		{
			lastMenuItem = currentMenuItem;
			
			currentMenuItem--;
			if(currentMenuItem < 0) currentMenuItem = 0;
			
			if(lastMenuItem != currentMenuItem)
				{
					MenuItems[lastMenuItem].OnSelected(false);
					
					MenuItems[currentMenuItem].OnSelected(true);
				}
			
			yield new WaitForSeconds(keyDelay);
		}
		else if(Input.GetAxisRaw("Vertical") < -0.9)
		{
			lastMenuItem = currentMenuItem;
			
			currentMenuItem++;
			if(currentMenuItem >= MenuItems.length) currentMenuItem = MenuItems.length - 1;
			
			if(lastMenuItem != currentMenuItem)
				{
					MenuItems[lastMenuItem].OnSelected(false);
					
					MenuItems[currentMenuItem].OnSelected(true);
				}
			
			yield new WaitForSeconds(keyDelay);
		}
		yield;
			
		if(Input.GetButtonDown("Shoot"))
		{
			GetComponent.<AudioSource>().PlayOneShot(SelectSound);
			if(currentMenuItem == 0)
			{	
				gameObject.Find("FadeController").SendMessageUpwards("fadeOut", SendMessageOptions.DontRequireReceiver);			
				yield WaitForSeconds(0.402);
				SendMusicPlayer.ChangeSong(1);
				Application.LoadLevel("CourseSelection");
			}
		}
	}
}

function StopFirstButton(){

	StartFirstButton = false;
}