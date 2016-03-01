var SendMusicPlayer : SongSwitch;

function Start () {
	
	yield WaitForSeconds(63);
	SendMusicPlayer.ChangeSong(7);
}