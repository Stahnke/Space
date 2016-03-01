var Meteor : GameObject;
var SpawningPoint : Transform;
var Column : int;
var MeteorType : int;
var WaitTime : float;
var Counter : int;
var MaxLevel1Spawn : int = 50;
var InitialOkay : boolean = false;

var MeteorSmallLv1 : GameObject;
var MeteorMediumLv1 : GameObject;
var MeteorLargeLv1 : GameObject;
var MeteorExtraLargeLv1 : GameObject;

var SendSpawnEnemy : SpawnEnemy;

var SpawnPoint1 : Transform;
var SpawnPoint2 : Transform;
var SpawnPoint3 : Transform;
var SpawnPoint4 : Transform;
var SpawnPoint5 : Transform;
var SpawnPoint6 : Transform;
var SpawnPoint7 : Transform;
var SpawnPoint8 : Transform;
var SpawnPoint9 : Transform;
var SpawnPoint10 : Transform;
var SpawnPoint11 : Transform;

function Start(){
	
	if(InitialOkay)
	{
		Course1();
	}

}

function CheckCourse(Course : int){

	if(Course == 1) Course1();
}

function Course1() {

	for(Counter = 0; Counter < MaxLevel1Spawn; Counter++){
	
		TopLeftSettings();
		TopRightSettings();
		WaitTime = Random.Range(1,11);
		WaitTime *= 0.1;
		yield WaitForSeconds(WaitTime);
		if(Counter >= 49)
		{
			yield WaitForSeconds(5);
			SendSpawnEnemy.ZeroEnemyCount();
		}
	}
}

function TopLeftSettings(){

	Column = Random.Range(1,7);
	SetSpawningPoint();
	MeteorType = Random.Range(1,10);
	SetMeteorType();
	Spawn();
}

function TopRightSettings(){

	Column = Random.Range(7,12);
	SetSpawningPoint();
	MeteorType = Random.Range(1,10);
	SetMeteorType();
	Spawn();
}

function SetSpawningPoint () {

		if(Column == 1)
		{
			SpawningPoint = SpawnPoint1;
		}
		if(Column == 2)
		{
			SpawningPoint = SpawnPoint2;
		}
		if(Column == 3)
		{
			SpawningPoint = SpawnPoint3;
		}
		if(Column == 4)
		{
			SpawningPoint = SpawnPoint4;
		}
		if(Column == 5)
		{
			SpawningPoint = SpawnPoint5;
		}
		if(Column == 6)
		{
			SpawningPoint = SpawnPoint6;
		}
		if(Column == 7)
		{
			SpawningPoint = SpawnPoint7;
		}
		if(Column == 8)
		{
			SpawningPoint = SpawnPoint8;
		}
		if(Column == 9)
		{
			SpawningPoint = SpawnPoint9;
		}
		if(Column == 10)
		{
			SpawningPoint = SpawnPoint10;
		}
		if(Column == 11)
		{
			SpawningPoint = SpawnPoint11;
		}
}

function SetMeteorType(){

	if(MeteorType < 4)
	{
		Meteor = MeteorSmallLv1;
	}
	if(MeteorType >= 4 && MeteorType < 7)
	{
		Meteor = MeteorMediumLv1;
	}
	if(MeteorType == 7 || MeteorType == 8)
	{
		Meteor = MeteorLargeLv1;
	}
	if(MeteorType == 9)
	{
		Meteor = MeteorExtraLargeLv1;
	}
	
}

function Spawn(){

	var go : GameObject = Spawner.Spawn(Meteor, SpawningPoint.position, SpawningPoint.rotation) as GameObject; 

}