var MySong: AudioClip[];
private var CurrentSong : int = 0;
     
function Start () {
	 GetComponent.<AudioSource>().loop = false;
	 GetComponent.<AudioSource>().clip = MySong[CurrentSong];
     GetComponent.<AudioSource>().Play();
}
     
function ChangeSong(SongNumber : int){

	GetComponent.<AudioSource>().loop = true;
	CurrentSong = SongNumber;
	GetComponent.<AudioSource>().clip = MySong[CurrentSong];
	GetComponent.<AudioSource>().Play();
}

