var SpawnPointA1 : Transform;
var SpawnPointA2 : Transform;
var SpawnPointA3 : Transform;
var SpawnPointA4 : Transform;
var SpawnPointA5 : Transform;
var SpawnPointA6 : Transform;
var SpawnPointA7 : Transform;
var SpawnPointA8 : Transform;
var SpawnPointA9 : Transform;
var SpawnPointA10 : Transform;
var SpawnPointA11 : Transform;
var SpawnPointB1 : Transform;
var SpawnPointB2 : Transform;
var SpawnPointB3 : Transform;
var SpawnPointB4 : Transform;
var SpawnPointB5 : Transform;
var SpawnPointB6 : Transform;
var SpawnPointB7 : Transform;
var SpawnPointB8 : Transform;
var SpawnPointB9 : Transform;
var SpawnPointB10 : Transform;
var SpawnPointB11 : Transform;
var SpawnPointC1 : Transform;
var SpawnPointC2 : Transform;
var SpawnPointC3 : Transform;
var SpawnPointC4 : Transform;
var SpawnPointC5 : Transform;
var SpawnPointC6 : Transform;
var SpawnPointC7 : Transform;
var SpawnPointC8 : Transform;
var SpawnPointC9 : Transform;
var SpawnPointC10 : Transform;
var SpawnPointC11 : Transform;

var SendMeteor : MeteorSpawning;

var EnemyCount : int;
var BossCount : int;
var SpawnAmount : int;
var Level : int = 0;
var ColumnChange : int;
var AltTime : float;
var DelayTime : float = 0;
var PortalType : int;
var SpawnType : float;
var CourseType : int;
var BossType : int;
var BossPortalType : int;

var SongNumber : int;

var GUIBoss : GameObject;
var GUIMeteor : GameObject;
var GUILevel : GameObject;
var GUIVictory : GameObject;
var SendGUILevel : GUILevelSettings;
var SendGUIScore : GUIScoreSettings;

var NextLevelSound : AudioClip;

var Enemy1 : GameObject;
var Enemy1Lv2 : GameObject;
var Enemy1Lv3 : GameObject;
var Enemy2 : GameObject;
var Enemy3 : GameObject;

var Boss1 : GameObject;

var BossPortal1 : GameObject;
var SpawnPortal1 : GameObject;
var SpawnPortal2 : GameObject;
var SpawnPortal3 : GameObject;

var Row : int = 1;
var Column : int = 0;
var Counter : int = 0;
var x : int = 0;

var SpawningPoint : Transform;

var TestingEnd : boolean = true;

var OkayToEndGame : boolean = true;
var Victory : boolean = false;
var Part2Okay : boolean = false;
var MeteorLevel : boolean;

var InitialOkay : boolean = true;
var Level2Okay : boolean = false;
var Level3Okay : boolean = false;
var Level4Okay : boolean = false;
var Level5Okay : boolean = false;


//==== START AND TESTING CONTROLS =======================================================================================================

function Start () {
	
	OkatToEndGame = true;

	if(!InitialOkay)
	{	
		BossCount = 1;
		gameObject.Find("CUnlockManager").SendMessageUpwards("SendCurrentCourseToSpawn", SendMessageOptions.DontRequireReceiver);
	}
	
//=== Testing ===//The script between these lines is used for testing purposes only, once the game is finished, delete them!
	if(TestingEnd)
	{
		yield WaitForSeconds(0.5);
		EndGame();
	}

	SpawningPoint = SpawnPointA1;
	
	if(InitialOkay)
	{
		Level = 0;
		BossCount = 1;
		gameObject.Find("CUnlockManager").SendMessageUpwards("SendCurrentCourseToSpawn", SendMessageOptions.DontRequireReceiver);
		StartCourse();
	}
	

	
	if(Level2Okay)
	{
		Level = 1;
		StartCourse();
	}
	
	if(Level3Okay)
	{
		Level = 2;
		StartCourse();
	}
	
	if(Level4Okay)
	{
		Level = 3;
		StartCourse();
	}
	
	if(Level5Okay)
	{
		Level = 4;
		StartCourse();
	}
	
	//The script between these lines is used for testing purposes only, once the game is finished, delete them!
	
}

//==== LEVEL PROCESSOR ==================================================================================================================

function Update(){

	if(EnemyCount < 0)
	{
		ZeroEnemyCount();
	}
	
	if(EnemyCount == 0)
	{
		StartCourse();
	}
	
	if(BossCount == 0 && OkayToEndGame == true)
	{
		EndGame();
	}

}

function GetCurrentCourse(CurrentCourse : int){

	CourseType = CurrentCourse;
}

//Sets up the GUI's for each level
function LevelSetUp(){

	Level += 1;
	SendGUILevel.MoveUp();
	yield WaitForSeconds(1);
	GUILevel.GetComponent.<GUIText>().text = "level: " + Level;
	GetComponent.<AudioSource>().PlayOneShot(NextLevelSound);
	yield WaitForSeconds(1);
	SendGUILevel.MoveDown();
}

function BossLevel(){
	
	gameObject.Find("Ship").SendMessageUpwards("Invulnerable", SendMessageOptions.DontRequireReceiver); 
	LevelSetUp();
	TurnMovementOff();
	BossAlert();
	ChangeSong();
	
	SetSpawningPoint();
	CheckPortalBoss();
	yield WaitForSeconds(AltTime);
	CheckSpawnBoss();
	yield WaitForSeconds(DelayTime);
	
	TurnMovementOn();
	SongNumber++;
	ChangeSong();
}

function EndGame(){
	
	OkayToEndGame = false;
	GameObject.Find("CUnlockManager").SendMessageUpwards("CUnlock",1, SendMessageOptions.DontRequireReceiver);
	Victory = true;
	SongNumber = 5;
	ChangeSong();
	SendGUIScore.MoveUp();
	GUIVictorySpawn();
	yield WaitForSeconds(3);
	SongNumber = 1;
	ChangeSong();
	gameObject.Find("FadeController").SendMessageUpwards("fadeOut", SendMessageOptions.DontRequireReceiver);
	yield WaitForSeconds(0.5);
	Application.LoadLevel("CourseSelection");
}

//Spawn alternating, one after another
function SpawnAlt(){

	for(Counter = 0; Counter < SpawnAmount; Counter++)
	{
		SetSpawningPoint();
		Column += ColumnChange;
		CheckPortal();
		yield WaitForSeconds(AltTime);
		CheckSpawn();
		yield WaitForSeconds(DelayTime);
	}
}

//Spawn absolute, all at once
function SpawnAbsPortal(){
	
	for(Counter = 0; Counter < SpawnAmount; Counter++)
	{
		SetSpawningPoint();
		Column += ColumnChange;
		CheckPortal();
	}
}

function SpawnAbsEnemy(){

	for(Counter = 0; Counter < 5; Counter++)
	{
		SetSpawningPoint();
		Column += 2;
		CheckSpawn();
	}
}

function StartCourse(){

	if(CourseType == 0)
	{
		Course0();
	}
}

function Course0(){

// === Level1 ===
	if(Level == 0)
	{
		EnemyCount = 8;
		LevelSetUp();
		yield WaitForSeconds(2);

		//Spawn First Half
		PortalType = 1;
		SpawnType = 1;
		Row = 1;
		Column = 1;
		SpawnAmount = 4;
		ColumnChange = 3;
		AltTime = 0.5;
		DelayTime = 0;
	
		SpawnAlt();
	
		yield WaitForSeconds(2.25);
		
		//Spawn Second Half
		Row = 2;
		Column = 2;
	
		SpawnAlt();
	}
	
// === Level 2 ===
	else if(Level == 1)
	{
		EnemyCount = 10;
		Part2Okay = true;
		LevelSetUp();
		yield WaitForSeconds(2);
	
		Row = 1;
		Column = 1;
		SpawnAmount = 5;
		ColumnChange = 2;
		AltTime = 0.5;
		
		SpawnAbsPortal();
		yield WaitForSeconds(AltTime);
		Row = 1;
		Column = 1;
		SpawnAbsEnemy();
		
		yield WaitForSeconds(5);
	
		Row = 2;
		Column = 2;
		
		SpawnAbsPortal();
		yield WaitForSeconds(AltTime);
		Row = 2;
		Column = 2;
		SpawnAbsEnemy();
		}
	
// === Level 2 Pt 2 ===
	else if(Level == 2)
	{
		if(Part2Okay == true)
		{
		
			EnemyCount = 2;
			Part2Off();
			PortalType = 2;
			SpawnType = 2;
			Row = 3;
			Column = 1;
			ColumnChange = 10;
			SpawnAmount = 2;
			AltTime = 0.5;
			DelayTime = 3;
		
			SpawnAlt();		
		}
		
// === Level 3 ===
		else
		{
			EnemyCount = 10;
			Part2Okay = true;
			LevelSetUp();
			yield WaitForSeconds(2);
		
			PortalType = 1;
			SpawnType = 1.2;
			SpawnAmount = 5;
			Row = 1;
			Column = 1;
			ColumnChange = 2;
			AltTime = 0.5;
			
			SpawnAbsPortal();
			yield WaitForSeconds(AltTime);
			Row = 1;
			Column = 1;
			SpawnAbsEnemy();
		
			yield WaitForSeconds(4);
		
			Row = 2;
			Column = 2;
		
			SpawnAbsPortal();
			yield WaitForSeconds(AltTime);
			Row = 2;
			Column = 2;
			SpawnAbsEnemy();
		
			yield WaitForSeconds(5);
			
		}
	}
	
	else if(Level == 3)
	{
	
//=== Level 3 Pt 2 ===
		if(Part2Okay == true)
		{
			EnemyCount = 10;
			MeteorLevel = true;
			Part2Off();
			SpawnAmount = 5;
			Row = 1;
			Column = 2;
			ColumnChange = 2;
			
			SpawnAbsPortal();
			yield WaitForSeconds(AltTime);
			Row = 1;
			Column = 2;
			SpawnAbsEnemy();
			
			yield WaitForSeconds(7);
			
			SpawnAmount = 2;
			Row = 3;
			Column = 1;
			ColumnChange = 10;
			PortalType = 2;
			SpawnType = 2;
			DelayTime = 3;
			
			SpawnAlt();
			
			yield WaitForSeconds(8);
			
			SpawnAmount = 3;
			Row = 1;
			Column = 1;
			ColumnChange = 5;
			DelayTime = 1.5;
			
			SpawnAlt();
		}
// === Meteor Level ===
		else if(MeteorLevel == true)
		{
			EnemyCount = 1;
			MeteorOff();
			MeteorAlert();
			yield WaitForSeconds(3);
			
			SendMeteor.CheckCourse(1);
		}

// === Level 4 ===
		else
		{
			EnemyCount = 12;
			Part2Okay = true;
			LevelSetUp();
			yield WaitForSeconds(2);
			
			Row = 2;
			Column = 2;
			ColumnChange = 2;
			SpawnAmount = 5;
			AltTime = 0.5;
			SpawnType = 1.2;
			PortalType = 1;
			
			SpawnAbsPortal();
			yield WaitForSeconds(AltTime);
			Column = 2;
			SpawnAbsEnemy();
			
			yield WaitForSeconds(2);
			
			Row = 1;
			Column = 1;
			ColumnChange = 10;
			SpawnAmount = 2;
			SpawnType = 2;
			PortalType = 2;
			
			SpawnAlt();
			
			yield WaitForSeconds(9);
			
			Row = 3;
			Column = 3;
			ColumnChange = 2;
			SpawnType = 1.2;
			PortalType = 1;
			SpawnAmount = 5;
			
			SpawnAlt();
		}	
	}
	
//=== Level 4 Pt 2 ===
	else if(Level == 4)
	{
		if(Part2Okay)
		{
			EnemyCount = 2;
			Part2Off();
			
			Row = 3;
			Column = 4;
			ColumnChange = 4;
			SpawnAmount = 2;
			SpawnType = 3;
			PortalType = 3;
			
			SpawnAlt();
		}
		
		else
		{
			BossType = 1;
			BossPortalType = 1;
			EnemyCount = 1;
			BossCount = 1;
			Row = 2;
			Column = 6;
			AltTime = 2.5; // Time To Spawn After Portal
			DelayTime = 5; // Time To Start After Spawn
			SongNumber = 3; // Boss Intro Sound / Song
			
			BossLevel();		
		}
	}
}

//==================CHECKS======================================================================================================

//SPAWN PORTALS
function CheckPortal(){

	if(PortalType == 1) var SSP1 : GameObject = Spawner.Spawn(SpawnPortal1, SpawningPoint.position, SpawningPoint.rotation) as GameObject;
	else if (PortalType == 2) var SSP2 : GameObject = Spawner.Spawn(SpawnPortal2, SpawningPoint.position, SpawningPoint.rotation) as GameObject;
	else if (PortalType == 3) var SSP3 : GameObject = Spawner.Spawn(SpawnPortal2, SpawningPoint.position, SpawningPoint.rotation) as GameObject;
}

//SPAWN ENEMIES
function CheckSpawn(){

	if(SpawnType == 1) var E1 : GameObject = Spawner.Spawn(Enemy1, SpawningPoint.position, SpawningPoint.rotation) as GameObject;
	else if (SpawnType == 1.2) var E1L2 : GameObject = Spawner.Spawn(Enemy1Lv2, SpawningPoint.position, SpawningPoint.rotation) as GameObject;
	else if (SpawnType == 1.3) var E1L3 : GameObject = Spawner.Spawn(Enemy1Lv3, SpawningPoint.position, SpawningPoint.rotation) as GameObject;
	else if (SpawnType == 2) var E2 : GameObject = Spawner.Spawn(Enemy2, SpawningPoint.position, SpawningPoint.rotation) as GameObject;
	else if (SpawnType == 3) var E3 : GameObject = Spawner.Spawn(Enemy3, SpawningPoint.position, SpawningPoint.rotation) as GameObject;
}

//SPAWN BOSSES and BOSS PORTALS

function CheckSpawnBoss(){

	if(BossType == 1) var B1 : GameObject = Spawner.Spawn(Boss1, SpawningPoint.position, SpawningPoint.rotation) as GameObject;
}

function CheckPortalBoss(){

	if(BossPortalType == 1) var SBP1 : GameObject = Spawner.Spawn(BossPortal1, SpawningPoint.position, SpawningPoint.rotation) as GameObject;
}

//Set Spawning Point
function SetSpawningPoint(){

	if(Row == 1)
	{
		if(Column == 1)
		{
			SpawningPoint = SpawnPointA1;
		}
		if(Column == 2)
		{
			SpawningPoint = SpawnPointA2;
		}
		if(Column == 3)
		{
			SpawningPoint = SpawnPointA3;
		}
		if(Column == 4)
		{
			SpawningPoint = SpawnPointA4;
		}
		if(Column == 5)
		{
			SpawningPoint = SpawnPointA5;
		}
		if(Column == 6)
		{
			SpawningPoint = SpawnPointA6;
		}
		if(Column == 7)
		{
			SpawningPoint = SpawnPointA7;
		}
		if(Column == 8)
		{
			SpawningPoint = SpawnPointA8;
		}
		if(Column == 9)
		{
			SpawningPoint = SpawnPointA9;
		}
		if(Column == 10)
		{
			SpawningPoint = SpawnPointA10;
		}
		if(Column == 11)
		{
			SpawningPoint = SpawnPointA11;
		}
	}
	
	if(Row == 2)
	{
		if(Column == 1)
		{
			SpawningPoint = SpawnPointB1;
		}
		if(Column == 2)
		{
			SpawningPoint = SpawnPointB2;
		}
		if(Column == 3)
		{
			SpawningPoint = SpawnPointB3;
		}
		if(Column == 4)
		{
			SpawningPoint = SpawnPointB4;
		}
		if(Column == 5)
		{
			SpawningPoint = SpawnPointB5;
		}
		if(Column == 6)
		{
			SpawningPoint = SpawnPointB6;
		}
		if(Column == 7)
		{
			SpawningPoint = SpawnPointB7;
		}
		if(Column == 8)
		{
			SpawningPoint = SpawnPointB8;
		}
		if(Column == 9)
		{
			SpawningPoint = SpawnPointB9;
		}
		if(Column == 10)
		{
			SpawningPoint = SpawnPointB10;
		}
		if(Column == 11)
		{
			SpawningPoint = SpawnPointB11;
		}
	}

	if(Row == 3)
	{
		if(Column == 1)
		{
			SpawningPoint = SpawnPointC1;
		}
		if(Column == 2)
		{
			SpawningPoint = SpawnPointC2;
		}
		if(Column == 3)
		{
			SpawningPoint = SpawnPointC3;
		}
		if(Column == 4)
		{
			SpawningPoint = SpawnPointC4;
		}
		if(Column == 5)
		{
			SpawningPoint = SpawnPointC5;
		}
		if(Column == 6)
		{
			SpawningPoint = SpawnPointC6;
		}
		if(Column == 7)
		{
			SpawningPoint = SpawnPointC7;
		}
		if(Column == 8)
		{
			SpawningPoint = SpawnPointC8;
		}
		if(Column == 9)
		{
			SpawningPoint = SpawnPointC9;
		}
		if(Column == 10)
		{
			SpawningPoint = SpawnPointC10;
		}
		if(Column == 11)
		{
			SpawningPoint = SpawnPointC11;
		}

	}

}

//=================ETC====================================================================================================================

//MUSIC PLAYERS

function ChangeSong(){

	GameObject.Find("MusicPlayerAll").SendMessageUpwards("ChangeSong", SongNumber, SendMessageOptions.DontRequireReceiver);
}

function TurnMovementOff(){

	gameObject.Find("Ship").SendMessageUpwards("MovementOff", SendMessageOptions.DontRequireReceiver);
}

function TurnMovementOn(){

	gameObject.Find("Ship").SendMessageUpwards("MovementOn", SendMessageOptions.DontRequireReceiver);
}

function MeteorAlert(){

	for(x = 0; x < 6; x++)
	{
		var meteor : GameObject = Spawner.Spawn(GUIMeteor, GUIMeteor.transform.position, GUIMeteor.transform.rotation) as GameObject;
		yield WaitForSeconds(0.45);
	}
}

function GUIVictorySpawn(){

	while(Victory)
	{
		var victory : GameObject = Spawner.Spawn(GUIVictory, GUIVictory.transform.position, GUIVictory.transform.rotation) as GameObject;
		yield WaitForSeconds(0.8);
	}

}

function BossAlert(){

	var boss : GameObject = Spawner.Spawn(GUIBoss, GUIBoss.transform.position, GUIBoss.transform.rotation) as GameObject;
}

function ZeroEnemyCount(){

	EnemyCount = 0;
}

function MinusEnemyCount(){

	EnemyCount -= 1;

}

function MinusBossCount(){

	BossCount -= 1;
}

function Part2Off(){

	Part2Okay = false;
}

function MeteorOff(){

	MeteorLevel = false;
}
