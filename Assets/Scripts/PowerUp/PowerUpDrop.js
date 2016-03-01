var MaxRandRange : int = 3;
var MinRandRange : int = 1;
var Rand : int;
var DropOkay : int;
var DropRate : int;
var Tier1 : boolean = false;
var Tier2 : boolean = false;
var Tier3 : boolean = false;

var Target : Transform;

var FireBall : GameObject;
var DoubleShot : GameObject;
var MiniShips : GameObject;

var ItemDrop : GameObject;

function Initiate(){

	DropOkay = 0;
	CheckEnemyType();
	CheckItemToDrop();
	Drop();
}

/* ========== TIER LIST =========

=== Tier 1 ===
	- Normal
	- LockOn
	- Homing

*/

function CheckEnemyType(){

	if(Tier1)
	{
		MinRandRange = 1;
		MaxRandRange = 1;
	}
	
	if(Tier2)
	{
		MinRandRange = 2;
		MinRandRange = 2;
	}
}

function CheckItemToDrop(){

	Rand = Random.Range(MinRandRange, MaxRandRange);

	if(Rand == 1)
	{
		ItemDrop = DoubleShot;
		DropRate = 15;
		SetDropRate();
	}
	if(Rand == 2)
	{
		ItemDrop = MiniShips;
		DropRate = 15;
		SetDropRate();
	}
}

function SetDropRate(){

	DropOkay = Random.Range(1, DropRate);
}

function Drop(){
	
	if(DropOkay == 1)
	{
		var go1 : GameObject = Spawner.Spawn(ItemDrop, Target.position, Target.rotation) as GameObject;
	}
}

